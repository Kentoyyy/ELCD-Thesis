from fastapi import FastAPI, File, UploadFile
from train_dysgraphia_model import DysgraphiaClassifier
from torchvision import transforms
from PIL import Image
import torch
import io
import torch.nn.functional as F
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
app = FastAPI()

# Allow CORS from your frontend (adjust the URL if necessary)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model_path = "C:/Users/omlan/OneDrive/Documents/GitHub/ELCD-Project/fastapi_backend/models/dysgraphia_model.pth"
model = DysgraphiaClassifier()
model.load_state_dict(torch.load(model_path, map_location=torch.device("cpu")))
model.eval()

transform = transforms.Compose([
    transforms.Resize((128, 128)),
    transforms.ToTensor(),
    transforms.Normalize([0.5, 0.5, 0.5], [0.5, 0.5, 0.5])
])

@app.post("/predict")
async def predict(file: UploadFile = File(...)): 
    image_data = await file.read()
    image = Image.open(io.BytesIO(image_data))
    image = transform(image).unsqueeze(0)  # Add batch dimension

    output = model(image)
    softmax_output = F.softmax(output, dim=1)
    _, predicted_class = torch.max(output, 1)

    confidence = softmax_output[0][predicted_class].item()

    # Severity Mapping Based on Confidence
    severity_level = (
        "Mild" if 0.01 <= confidence <= 0.25 else
        "Moderate" if 0.26 <= confidence <= 0.50 else
        "Severe" if 0.51 <= confidence <= 0.75 else
        "Profound" if 0.76 <= confidence <= 0.99 else
        "No significant impairment detected"
    )

    # Set label mapping according to your model's classes
    labels = ["Non-Dysgraphic", "Dysgraphic"]
    prediction_label = labels[predicted_class.item()]

    return {
        "Prediction": prediction_label,
        "Confidence": confidence,
        "Severity": severity_level
    }