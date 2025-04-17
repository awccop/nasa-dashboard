# wsgi.py (root level)
from backend.app import app  # Import the Flask app from backend

if __name__ == "__main__":
    app.run()
