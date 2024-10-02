import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
import joblib

# Load a sample dataset (customize this dataset with real data)
dyslexic_data = {
    'words': ['aple', 'bananna', 'grap', 'mlon', 'orng', 'pech'],  # Misspelled words
    'is_dyslexic': [1, 1, 1, 1, 1, 1]  # 1 means dyslexia-related
}

normal_data = {
    'words': ['apple', 'banana', 'grape', 'melon', 'orange', 'peach', 'plum', 'pear'],  # Correctly spelled words
    'is_dyslexic': [0, 0, 0, 0, 0, 0, 0, 0]  # 0 means normal
}

# Create DataFrames
dyslexic_df = pd.DataFrame(dyslexic_data)
normal_df = pd.DataFrame(normal_data)

# Combine both datasets
df = pd.concat([normal_df, dyslexic_df], ignore_index=True)

# Split dataset into training and testing sets
X = df['words']
y = df['is_dyslexic']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Convert the text data to numeric data using CountVectorizer
vectorizer = CountVectorizer()
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train a simple Logistic Regression model
model = LogisticRegression()
model.fit(X_train_vec, y_train)

# Save the model and vectorizer using joblib
joblib.dump(model, 'dyslexia_model.pkl')
joblib.dump(vectorizer, 'vectorizer.pkl')

print("Model and vectorizer are saved!")
