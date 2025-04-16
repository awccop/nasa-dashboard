# backend/app.py
import os
import logging
import requests
from flask import Flask, jsonify, make_response
from flask_cors import CORS
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Configure logging (Adjust level to INFO or DEBUG as needed)
logging.basicConfig(
    level=logging.INFO,
    format="[%(asctime)s] %(levelname)s - %(message)s",
    datefmt='%Y-%m-%d %H:%M:%S'
)

# Initialize Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# Retrieve NASA API key from environment variables
NASA_API_KEY = os.getenv('NASA_API_KEY')
if not NASA_API_KEY:
    logging.error("NASA_API_KEY is not set in the environment variables.")
    raise ValueError("NASA_API_KEY is not set in the environment variables.")

# Root endpoint (for quick verification)
@app.route('/', methods=['GET'])
def home():
    return 'Welcome to the NASA Dashboard API. Use /api/nasa/apod to get the Astronomy Picture of the Day.'

# Endpoint to fetch the Astronomy Picture of the Day
@app.route('/api/nasa/apod', methods=['GET'])
def get_apod():
    try:
        url = f"https://api.nasa.gov/planetary/apod?api_key={NASA_API_KEY}"
        logging.info(f"Fetching APOD from: {url}")

        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        logging.info("NASA API response received successfully.")

        # Optionally, set cache-control headers
        resp = make_response(jsonify(data))
        resp.headers["Cache-Control"] = "public, max-age=300"  # Cache for 5 minutes
        return resp

    except requests.exceptions.RequestException as e:
        logging.error("NASA API request failed: %s", e)
        return jsonify({'error': 'Failed to fetch data from NASA API'}), 500

# Custom 404 handler to provide a clear response instead of a blank page
@app.errorhandler(404)
def not_found(e):
    return jsonify({'error': 'Endpoint not found. Please check your URL.'}), 404

if __name__ == '__main__':
    logging.info("Starting Flask server...")
    app.run(debug=True)
