#C:\Users\aweso\Downloads\nasa-dashboard\backend\nasa_service.py
import requests

NASA_API_KEY = 'YOUR_NASA_API_KEY'

def get_asteroids_data():
    url = f'https://api.nasa.gov/neo/rest/v1/feed?api_key={NASA_API_KEY}'
    response = requests.get(url)
    return response.json()

def get_mars_weather_data():
    url = f'https://api.nasa.gov/insight_weather/?api_key={NASA_API_KEY}&feedtype=json&ver=1.0'
    response = requests.get(url)
    return response.json()
