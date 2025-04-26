from flask import Blueprint, jsonify
from nasa_service import get_apod

nasa_bp = Blueprint("nasa", __name__)

@nasa_bp.route("/apod", methods=["GET"])
def apod():
    data = get_apod()
    if data:
        return jsonify(data)
    else:
        return jsonify({"error": "Failed to fetch data from NASA API."}), 502

