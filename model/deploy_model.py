import pickle
from flask import Flask, request, jsonify

app = Flask(__name__)

# Load the trained model
with open('RandomForest.pkl', 'rb') as f:
    model = pickle.load(f)

@app.route('/api', methods=['POST', 'GET'])

def predict_crop():
    data = request.get_json()
    input_data = [
        float(data['n']),
        float(data['p']),
        float(data['k']),
        float(data['temperature']),
        float(data['humidity']),
        float(data['ph']),
        float(data['rainfall'])
    ]
    print(input_data)

    # Make a prediction using the loaded model
    prediction = model.predict([input_data])[0]
    
    # Convert the predicted label to a crop name
    crop_names = ['rice', 'wheat', 'maize']
    predicted_crop = crop_names[prediction]
    response = {'crop': predicted_crop}
    
    print(response)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)