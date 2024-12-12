import torch
import torch.nn as nn
import torch.optim as optim
from sklearn.model_selection import train_test_split
import pandas as pd
from sklearn.utils.class_weight import compute_class_weight
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report
import joblib

# Load the data
data = pd.read_csv('data/phonological_test_data.csv')

# Prepare the data
answers_columns = [f'answer_{i}' for i in range(1, 16)]
X = data[answers_columns]
y = data['label'].map({
    'No risk of dyslexia (Probability: 0.46)': 0,
    'Low risk of dyslexia (Probability: 0.46)': 1,
    'Medium risk of dyslexia (Probability: 0.46)': 2,
    'High risk of dyslexia (Probability: 0.46)': 3
})

# Handle missing values (replacing -1 with 0 or another method)
X = X.replace(-1, 0)  # Replace -1 with 0
X = X.fillna(0)  # Handle any NaN values

# Standardize the features
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

# Convert to PyTorch tensors
X_train_tensor = torch.tensor(X_train, dtype=torch.float32)
X_test_tensor = torch.tensor(X_test, dtype=torch.float32)
y_train_tensor = torch.tensor(y_train.values, dtype=torch.long)
y_test_tensor = torch.tensor(y_test.values, dtype=torch.long)

# Define the neural network architecture
class PhonologicalRiskModel(nn.Module):
    def __init__(self):
        super(PhonologicalRiskModel, self).__init__()
        self.layer1 = nn.Linear(15, 128)
        self.layer2 = nn.Linear(128, 64)
        self.layer3 = nn.Linear(64, 4)   # 4 possible classes
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = self.relu(self.layer1(x))
        x = self.relu(self.layer2(x))
        x = self.layer3(x)
        return x  # raw logits for CrossEntropyLoss

# Initialize the model, loss function, and optimizer
model = PhonologicalRiskModel()
loss_fn = nn.CrossEntropyLoss()  # For multi-class classification
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Training loop
num_epochs = 100  # Increased epochs
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    
    # Forward pass
    output = model(X_train_tensor)
    loss = loss_fn(output, y_train_tensor)
    
    # Backward pass and optimization
    loss.backward()
    optimizer.step()
    
    if (epoch+1) % 10 == 0:
        print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}")

# Evaluate the model
model.eval()
with torch.no_grad():
    output = model(X_test_tensor)
    _, predicted = torch.max(output, 1)
    correct = (predicted == y_test_tensor).sum().item()
    accuracy = correct / y_test_tensor.size(0)
    print(f'Accuracy: {accuracy * 100:.2f}%')

    # Detailed classification report
    print(classification_report(y_test_tensor, predicted, target_names=['No risk', 'Low risk', 'Medium risk', 'High risk']))

# Save the model using joblib
joblib.dump(model, 'models/phonological_model.joblib')
