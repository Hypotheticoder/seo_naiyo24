from database.db import create_connection

def insert_trial_submission(data):
    connection = create_connection()
    cursor = connection.cursor()
    
    query = """
    INSERT INTO trial_submissions (name, email, phone, company, company_url, plan_name, period)
    VALUES (%s, %s, %s, %s, %s, %s, %s)
    RETURNING id;
    """
    
    try:
        cursor.execute(query, (
            data['name'],
            data['email'],
            data.get('phone', None),
            data['company'],
            data.get('companyUrl', None),
            data['plan'],
            data['period']
        ))
        submission_id = cursor.fetchone()[0]
        connection.commit()
        return submission_id
    except Exception as e:
        print(f"The error '{e}' occurred")
        connection.rollback()
        return None
    finally:
        cursor.close()
        connection.close()

def insert_contact_submission(data):
    connection = create_connection()
    cursor = connection.cursor()
    
    query = """
    INSERT INTO contact_submissions (name, email, message)
    VALUES (%s, %s, %s)
    RETURNING id;
    """
    
    try:
        cursor.execute(query, (
            data['name'],
            data['email'],
            data['message']
        ))
        submission_id = cursor.fetchone()[0]
        connection.commit()
        return submission_id
    except Exception as e:
        print(f"The error '{e}' occurred")
        connection.rollback()
        return None
    finally:
        cursor.close()
        connection.close()