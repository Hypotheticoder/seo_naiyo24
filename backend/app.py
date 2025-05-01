# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from database.queries import insert_trial_submission, insert_contact_submission
from database.db import create_connection
from config import Config
import logging
from logging.handlers import RotatingFileHandler

# Initialize Flask application
app = Flask(__name__)
app.config.from_object(Config)

# Configure CORS for your React app running on port 5173
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Configure logging
handler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=3)
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
app.logger.addHandler(handler)
app.logger.setLevel(logging.INFO)

def check_db_connection():
    """Check if database connection is successful"""
    try:
        conn = create_connection()
        if conn:
            conn.close()
            app.logger.info("Database connection successful")
            return True
        app.logger.error("Database connection failed")
        return False
    except Exception as e:
        app.logger.error(f"Database connection error: {str(e)}")
        return False

def initialize_app():
    """Initialize application components"""
    app.logger.info("Starting application initialization...")
    
    # Verify database connection
    if not check_db_connection():
        raise RuntimeError("Failed to connect to database during initialization")
    
    app.logger.info("Application initialized successfully")

# Initialize the app when it starts
initialize_app()

@app.route('/api/health', methods=['GET'])
def health_check():
    """Endpoint to check API health status"""
    try:
        db_status = "connected" if check_db_connection() else "disconnected"
        return jsonify({
            "status": "running",
            "database": db_status,
            "version": "1.0.0"
        }), 200
    except Exception as e:
        app.logger.error(f"Health check failed: {str(e)}")
        return jsonify({"error": "Health check failed"}), 500

@app.route('/api/trial', methods=['POST'])
def handle_trial_submission():
    """Handle trial signup form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'company', 'plan', 'period']
        missing_fields = [field for field in required_fields if not data.get(field)]
        
        if missing_fields:
            app.logger.warning(f"Missing fields: {missing_fields}")
            return jsonify({
                "error": "Missing required fields",
                "missing": missing_fields
            }), 400
        
        # Process submission
        submission_id = insert_trial_submission(data)
        if submission_id:
            app.logger.info(f"New trial submission: {submission_id}")
            return jsonify({
                "message": "Trial submission successful",
                "submission_id": submission_id
            }), 201
        
        app.logger.error("Failed to save trial submission")
        return jsonify({"error": "Failed to save submission"}), 500
        
    except Exception as e:
        app.logger.error(f"Trial submission error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

@app.route('/api/contact', methods=['POST'])
def handle_contact_submission():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        missing_fields = [field for field in required_fields if not data.get(field)]
        
        if missing_fields:
            app.logger.warning(f"Missing fields: {missing_fields}")
            return jsonify({
                "error": "Missing required fields",
                "missing": missing_fields
            }), 400
        
        # Process submission
        submission_id = insert_contact_submission(data)
        if submission_id:
            app.logger.info(f"New contact submission: {submission_id}")
            return jsonify({
                "message": "Contact submission successful",
                "submission_id": submission_id
            }), 201
        
        app.logger.error("Failed to save contact submission")
        return jsonify({"error": "Failed to save submission"}), 500
        
    except Exception as e:
        app.logger.error(f"Contact submission error: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)