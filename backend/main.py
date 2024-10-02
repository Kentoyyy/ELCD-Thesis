from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import joblib

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load the trained machine learning model and the vectorizer
model = joblib.load('dyslexia_model.pkl')
vectorizer = joblib.load('vectorizer.pkl')

# Define the request body schema
class DyslexiaTestRequest(BaseModel):
    responses: List[str]

# Define the machine learning function to analyze responses
def analyze_responses_ml(responses):
    # Preprocess responses (lowercase and strip whitespace)
    responses = [r.lower().strip() for r in responses]
    
    # Transform the user responses into vectorized form
    responses_vec = vectorizer.transform(responses)
    
    # Use the model to predict dyslexia risk for each response
    predictions = model.predict(responses_vec)
    
    # Analyze the results
    risk_level = sum(predictions)
    
    if risk_level >= 2:
        return "High risk for dyslexia"
    elif risk_level == 1:
        return "Moderate risk"
    else:
        return "Low risk"

# API endpoint for testing dyslexia
@app.post("/api/dyslexia-test")
async def dyslexia_test(test_request: DyslexiaTestRequest):
    result = analyze_responses_ml(test_request.responses)
    return {"result": result}
