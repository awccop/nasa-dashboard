from dotenv import load_dotenv
load_dotenv()

from flask import Blueprint, jsonify
import requests
import os

nasa_bp = Blueprint('nasa_bp', __name__)

NASA_API_KEY = os.getenv('NASA_API_KEY')
if not NASA_API_KEY:
    raise ValueError("NASA_API_KEY not found in environment variables.")

@nasa_bp.route('/asteroids', methods=['GET'])
def get_asteroids():
    try:
        url = f'https://api.nasa.gov/neo/rest/v1/feed?api_key={NASA_API_KEY}'
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Failed to fetch asteroid data', 'details': str(e)}), 500

@nasa_bp.route('/mars-weather', methods=['GET'])
def get_mars_weather():
    try:
        url = f'https://api.nasa.gov/insight_weather/?api_key={NASA_API_KEY}&feedtype=json&ver=1.0'
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({'error': 'Failed to fetch Mars weather data', 'details': str(e)}), 500
