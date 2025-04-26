// backend/nasa_service.py
import os
import requests

NASA_API_KEY = os.getenv("NASA_API_KEY")
NASA_APOD_URL = "https://api.nasa.gov/planetary/apod"


def get_apod():
    params = {"api_key": NASA_API_KEY}
    try:
        response = requests.get(NASA_APOD_URL, params=params)
        response.raise_for_status()
        return response.json()
    except requests.RequestException as e:
        print(f"NASA API Error: {e}")
        return None