#C:\Users\aweso\Downloads\nasa-dashboard\backend\nasa_routes.py
from flask import Blueprint, jsonify
from nasa_service import get_asteroids_data, get_mars_weather_data

nasa_routes = Blueprint('nasa_routes', __name__)

@nasa_routes.route('/api/asteroids', methods=['GET'])
def asteroids():
    data = get_asteroids_data()
    return jsonify(data)

@nasa_routes.route('/api/mars-weather', methods=['GET'])
def mars_weather():
    data = get_mars_weather_data()
    return jsonify(data)
