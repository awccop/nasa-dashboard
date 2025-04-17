from flask import Flask
from flask_cors import CORS
from backend.routes.nasa_routes import nasa_bp


import os

app = Flask(__name__)
CORS(app)

# Register NASA API routes under /api prefix
app.register_blueprint(nasa_bp, url_prefix="/api")

@app.route('/')
def index():
    return {"message": "NASA Dashboard API is running."}

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
