from flask import Flask, request, jsonify
import numpy as np
import pickle
import joblib
import pandas as pd
import traceback


app = Flask(__name__)

@app.route('/predict', methods=['GET', 'POST'])
def predict():
    if model:
        try:
            json_ = request.json
            print(json_)

            query = pd.get_dummies(pd.DataFrame(json_))
            query = query.reindex(columns=model_columns, fill_value=0)

            prediction = list(model.predict(query))

            return jsonify({'prediction': str(prediction)})
        
        except:

            return jsonify({'trace': traceback.format_exc()})
    
    else:
        print('Train the model first')
        return ('No Model here to use')

if __name__ == '__main__':
    try:
        port = int(sys.argv[1]) # This is for a command-line input
    except:
        port = 12345 # If you don't provide any port the port will be set to 12345

    model = joblib.load("RandomForest.pkl") # Load "model.pkl"
    print ('Model loaded')
    model_columns = joblib.load("model_columns.pkl") # Load "model_columns.pkl"
    print ('Model columns loaded')

    app.run(port=port, debug=True)
