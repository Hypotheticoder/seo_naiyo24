import psycopg2
from psycopg2 import OperationalError
from config import Config

def create_connection():
    connection = None
    try:
        connection = psycopg2.connect(
            database="seo_tool_db",
            user="postgres",
            password="admin",  # Replace with your PostgreSQL password
            host="localhost",
            port="5432",
        )
        print("Connection to PostgreSQL DB successful")
    except OperationalError as e:
        print(f"The error '{e}' occurred")
    return connection