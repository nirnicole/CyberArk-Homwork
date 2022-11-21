import pymysql 
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

if connection.open:
    print("the connection is opened")
    try:
        with connection.cursor() as cursor:
            query = "SELECT * FROM company"
            cursor.execute(query)
            result = cursor.fetchall()
    except:
        result = "Error"

    print(result)