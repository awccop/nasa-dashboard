import os
from dotenv import load_dotenv
import requests
from datetime import datetime, timedelta

load_dotenv()
NASA_API_KEY = os.getenv('NASA_API_KEY')

def get_apod():
    url = f"https://api.nasa.gov/planetary/apod?api_key={NASA_API_KEY}"
    return requests.get(url).json()

def get_asteroids():
    today = datetime.today().strftime('%Y-%m-%d')
    end = (datetime.today() + timedelta(days=2)).strftime('%Y-%m-%d')
    url = f"https://api.nasa.gov/neo/rest/v1/feed?start_date={today}&end_date={end}&api_key={NASA_API_KEY}"
    return requests.get(url).json()

def get_mars_weather():
    url = f"https://api.nasa.gov/insight_weather/?api_key={NASA_API_KEY}&feedtype=json&ver=1.0"
    return requests.get(url).json()
