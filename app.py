from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import numpy as np
import matplotlib.pyplot as plt
from io import BytesIO
import base64
from PIL import Image

app = Flask(__name__)
CORS(app, origins='http://localhost:3000')
# Define route dor uploading images
@app.route('/upload-image', methods=['POST'])
def upload_image():
    numpy_file = request.files['numpy_file']
    numpy_array = np.load(numpy_file)

    pil_image = Image.fromarray(numpy_array)
    
    with BytesIO() as output:
        pil_image.save(output, format='PNG')
        image_bytes = output.getvalue()

    image_base64 = base64.b64encode(image_bytes).decode('utf-8')

    return jsonify({'image_data': image_base64})

if __name__ == '__main__':
    app.run(host='localhost', debug=True)

