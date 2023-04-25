import pickle
import math
import json

from flask import Flask, request, jsonify
from flask_cors import cross_origin, CORS
import logging

logging.getLogger('flask_cors').level = logging.DEBUG

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

# Load the trained model
with open('RandomForest.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/', methods=['POST', 'GET'])
@cross_origin()

def predict_crop():
    data = request.json

    print(data)

    input_data = [
        float(data['n']),
        float(data['p']),
        float(data['k']),
        float(data['temperature']),
        float(data['humidity']),
        float(data['ph']),
        float(data['rainfall'])
    ]

    # Make a prediction using the loaded model
    prediction = model.predict([input_data])[0]
    
    response = {'crop': prediction}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)