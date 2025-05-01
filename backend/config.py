# config.py
import os
from dotenv import load_dotenv
from typing import Dict, Any

# Load environment variables from .env file
load_dotenv()

class Config:
    """Base configuration"""
    DEBUG = False
    TESTING = False
    SECRET_KEY = os.getenv('SECRET_KEY', 'your-secret-key-here')  # Change for production!
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')
    
    # Security headers
    SECURITY_HEADERS = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-XSS-Protection': '1; mode=block'
    }
    
    # Rate limiting (if using Flask-Limiter)
    RATELIMIT_DEFAULT = "200 per day;50 per hour"
    
    @staticmethod
    def get_database_config() -> Dict[str, Any]:
        """Parse database connection details from URI"""
        import urllib.parse
        db_url = urllib.parse.urlparse(os.getenv('DATABASE_URL'))
        return {
            'database': db_url.path[1:],
            'user': db_url.username,
            'password': db_url.password,
            'host': db_url.hostname,
            'port': db_url.port
        }

class DevelopmentConfig(Config):
    """Development-specific configuration"""
    DEBUG = True
    LOG_LEVEL = 'DEBUG'
    SQLALCHEMY_ECHO = True  # Log SQL queries

class TestingConfig(Config):
    """Testing configuration"""
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.getenv('TEST_DATABASE_URL', 'postgresql://localhost/seo_tool_test')

class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False
    LOG_LEVEL = 'WARNING'
    SECRET_KEY = os.getenv('SECRET_KEY')  # Must be set in production

# Configuration selector
config_by_name = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,
    'production': ProductionConfig
}

def get_config(env: str = None) -> Config:
    """Retrieve environment configuration"""
    if not env:
        env = os.getenv('FLASK_ENV', 'development')
    return config_by_name.get(env, DevelopmentConfig)