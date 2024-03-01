import numpy as np
import matplotlib.pyplot as plt
from io import BytesIO
import base64
from PIL import Image


def upload_image():
    numpy_array = np.load('C:\\Users\\User\\Taran_my\\cutsByHand\\1.npy')

    pil_image = Image.fromarray(numpy_array)
    
    with BytesIO() as output:
        pil_image.save(output, format='PNG')
        image_bytes = output.getvalue()
        print(image_bytes)

    image_base64 = base64.b64encode(image_bytes).decode('utf-8')

    # print(image_base64)

upload_image()
