from flask import Flask
from flask_cors import CORS
from routes.nasa_routes import nasa_bp
import os

app = Flask(__name__)
CORS(app)

# Attach the NASA routes (with full path already inside blueprint)
app.register_blueprint(nasa_bp)

@app.route('/')
def index():
    return {"message": "NASA Dashboard API is running."}

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
