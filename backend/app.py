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

# Configure CORS with explicit settings
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000", "http://127.0.0.1:3000"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type", "Authorization"],
        "supports_credentials": True
    }
})

# Configure logging
handler = RotatingFileHandler('app.log', maxBytes=10000, backupCount=3)
handler.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
handler.setFormatter(formatter)
app.logger.addHandler(handler)
app.logger.setLevel(logging.INFO)

# Database connection check
def check_db_connection():
    try:
        conn = create_connection()
        if conn:
            conn.close()
            return True
        return False
    except Exception as e:
        app.logger.error(f"DB connection check failed: {e}")
        return False

@app.before_first_request
def initialize_app():
    """Initialize application components"""
    app.logger.info("Initializing application...")
    if not check_db_connection():
        app.logger.error("Failed to connect to database on startup")
        raise RuntimeError("Database connection failed on startup")

@app.before_request
def before_request_middleware():
    """Global request preprocessing"""
    if request.method == 'POST' and request.path.startswith('/api'):
        if not request.is_json:
            app.logger.warning("Invalid content type for API request")
            return jsonify({'error': 'Content-Type must be application/json'}), 415

# Health check endpoint
@app.route('/api/health', methods=['GET'])
def health_check():
    """Endpoint to verify service health"""
    try:
        db_ok = check_db_connection()
        status = {
            'status': 'ok' if db_ok else 'database_error',
            'database': 'connected' if db_ok else 'disconnected',
            'version': '1.0.0'
        }
        app.logger.info(f"Health check: {status}")
        return jsonify(status), 200 if db_ok else 503
    except Exception as e:
        app.logger.error(f"Health check failed: {e}")
        return jsonify({'status': 'error', 'details': str(e)}), 500

# Trial submission endpoint
@app.route('/api/trial', methods=['POST'])
def handle_trial_submission():
    """Handle trial signup submissions"""
    try:
        data = request.get_json()
        if not data:
            app.logger.warning("Empty request body received")
            return jsonify({'error': 'Request body must be JSON'}), 400
        
        # Validate required fields
        required_fields = ['name', 'email', 'company', 'plan', 'period']
        missing_fields = [field for field in required_fields if field not in data or not data[field]]
        
        if missing_fields:
            app.logger.warning(f"Missing fields in trial submission: {missing_fields}")
            return jsonify({
                'error': 'Missing required fields',
                'missing': missing_fields
            }), 400
        
        # Database operation
        try:
            app.logger.info(f"Processing trial submission for {data['email']}")
            submission_id = insert_trial_submission(data)
            
            if submission_id:
                app.logger.info(f"Trial submission successful, ID: {submission_id}")
                return jsonify({
                    'message': 'Trial submission successful',
                    'submission_id': submission_id
                }), 201
            
            app.logger.error("Trial submission failed - no ID returned")
            return jsonify({'error': 'Database operation failed'}), 500
                
        except Exception as db_error:
            app.logger.error(f"Database error in trial submission: {db_error}")
            return jsonify({
                'error': 'Database operation failed',
                'details': str(db_error)
            }), 500
            
    except Exception as e:
        app.logger.error(f"Unexpected error in trial submission: {e}")
        return jsonify({
            'error': 'Internal server error',
            'details': str(e)
        }), 500

# Contact form endpoint
@app.route('/api/contact', methods=['POST'])
def handle_contact_submission():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        if not data:
            return jsonify({'error': 'Request body must be JSON'}), 400
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        missing_fields = [field for field in required_fields if field not in data or not data[field]]
        
        if missing_fields:
            app.logger.warning(f"Missing fields in contact submission: {missing_fields}")
            return jsonify({
                'error': 'Missing required fields',
                'missing': missing_fields
            }), 400
        
        # Database operation
        try:
            app.logger.info(f"Processing contact submission from {data['email']}")
            submission_id = insert_contact_submission(data)
            
            if submission_id:
                app.logger.info(f"Contact submission successful, ID: {submission_id}")
                return jsonify({
                    'message': 'Contact submission successful',
                    'submission_id': submission_id
                }), 201
            
            app.logger.error("Contact submission failed - no ID returned")
            return jsonify({'error': 'Database operation failed'}), 500
                
        except Exception as db_error:
            app.logger.error(f"Database error in contact submission: {db_error}")
            return jsonify({
                'error': 'Database operation failed',
                'details': str(db_error)
            }), 500
            
    except Exception as e:
        app.logger.error(f"Unexpected error in contact submission: {e}")
        return jsonify({
            'error': 'Internal server error',
            'details': str(e)
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)