import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import joblib
import os
import pandas as pd
from pydantic import BaseModel
from typing import List, Optional
from pymongo import MongoClient
from datetime import datetime
import random

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with specific domains in production
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB configuration
MONGO_URI = "mongodb://localhost:27017"  # Update with your MongoDB URI
DB_NAME = "phonological_test"
COLLECTION_NAME = "test_results"
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
collection = db[COLLECTION_NAME]

# Path configurations
PHONOLOGICAL_MODEL_PATH = "models/phonological_model.joblib"
READING_MODEL_PATH = "models/reading_model.joblib"
DATA_PATH = "data/phonological_test_data.csv"
IMAGES_DIR = "images"

# Serve static images
app.mount("/images", StaticFiles(directory=IMAGES_DIR), name="images")

# Load Phonological Model
if not os.path.exists(PHONOLOGICAL_MODEL_PATH):
    logger.info("Model not found. Training a new model...")
    from train_model import train_and_save_model
    train_and_save_model()

phonological_model = joblib.load(PHONOLOGICAL_MODEL_PATH)
try:
    expected_features = phonological_model.n_features_in_
except AttributeError:
    expected_features = 15
    logger.warning("Unable to determine expected features. Defaulting to 15.")

# Load Reading Model
try:
    reading_model = joblib.load(READING_MODEL_PATH)
except Exception as e:
    logger.error(f"Error loading reading model: {e}")
    reading_model = None

# Reverse label mapping
label_mapping = {
    0: 'No risk of dyslexia',
    1: 'Low risk of dyslexia',
    2: 'Medium risk of dyslexia',
    3: 'High risk of dyslexia'
}

# Phonological Test Endpoint
class Answers(BaseModel):
    user_id: str
    answers: Optional[List[int]] = None

@app.post("/predict/")
async def predict(data: Answers):
    if not data.answers:
        raise HTTPException(status_code=400, detail="No answers provided for prediction.")
    input_data = data.answers + [0] * (expected_features - len(data.answers))
    prediction = phonological_model.predict([input_data])
    prediction_probability = (
        phonological_model.predict_proba([input_data])[0][prediction[0]]
        if hasattr(phonological_model, 'predict_proba') else None
    )
    risk_category = label_mapping.get(prediction[0], "Unknown risk")
    if prediction_probability and prediction[0] == 1:
        risk_category = (
            f"High risk (Probability: {prediction_probability:.2f})"
            if prediction_probability > 0.8 else
            f"Medium risk (Probability: {prediction_probability:.2f})"
            if prediction_probability > 0.5 else
            f"Low risk (Probability: {prediction_probability:.2f})"
        )
    new_data = {
        f'answer_{i + 1}': ans for i, ans in enumerate(data.answers)
    }
    new_data.update({
        'user_id': data.user_id,
        'risk_category': risk_category,
        'timestamp': datetime.utcnow()
    })
    collection.insert_one(new_data)
    df = pd.DataFrame([new_data])
    if not os.path.exists(DATA_PATH):
        df.to_csv(DATA_PATH, mode='w', header=True, index=False)
    else:
        df.to_csv(DATA_PATH, mode='a', header=False, index=False)
    return {"prediction": risk_category, "probability": f"{prediction_probability:.2f}" if prediction_probability else "N/A"}

# Reading Test Endpoints
CVC_WORDS = ["cat", "dog", "bat", "hat", "mat", "rat"]
CVC_SENTENCES = [
    "The cat is on the mat.",
    "The dog barks at the bat.",
    "The hat is big and red.",
]

class AnalyzeSpeechRequest(BaseModel):
    word: str
    speech: str

class AnalyzeSpeechResponse(BaseModel):
    message: str
    accuracy: float
    
@app.get("/cvc-words")
def get_cvc_words():
    return {"words": CVC_WORDS}

# Endpoint to fetch CVC sentences
@app.get("/cvc-sentences")
def get_cvc_sentences():
    return {"sentences": CVC_SENTENCES}

# Endpoint to analyze user speech
@app.post("/analyze-speech", response_model=AnalyzeSpeechResponse)
def analyze_speech(request: AnalyzeSpeechRequest):
    if not model:
        raise HTTPException(status_code=500, detail="Model not loaded")

    user_input = request.speech.lower().strip()
    expected = request.word.lower().strip()

    # Calculate text similarity
    similarity = SequenceMatcher(None, user_input, expected).ratio()
    accuracy = round(similarity * 100, 2)  # Convert to percentage

    if user_input == expected:
        return {"message": "Correct pronunciation!", "accuracy": accuracy}
    else:
        return {
            "message": f"Expected '{expected}', but got '{user_input}'.",
            "accuracy": accuracy,
        }
