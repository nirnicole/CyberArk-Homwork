import pymysql 
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

def executeQuery(cursor, sqlQuery):
    try:
        query = sqlQuery
        cursor.execute(query)
        result = cursor.fetchall()
    except:
        result = "DB Error"
    return result

def executeManipulating(connection, cursor, sqlQuery):
    result = executeQuery(cursor, sqlQuery)
    connection.commit()
    return result

if connection.open:
    print("the connection is opened")
    corsur = connection.cursor()
    executeQuery(corsur, "CREATE TABLE company(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), industry VARCHAR(20), employees INT);")
    executeQuery(corsur, "INSERT INTO Company (name,industry,employees) VALUES ('Google','hi tech',1000);")
    executeQuery(corsur, "INSERT INTO Company (name,industry,employees) VALUES ('CyberArk','hi tech',2000);")
    res = executeQuery(corsur, "SELECT * FROM company")
    print(res)
    for company in res:
        print(company['name'])












# if connection.open:
#     print("the connection is opened")

#     try:
#         with connection.cursor() as cursor:
#             query = "SELECT * FROM company"
#             cursor.execute(query)
#             result = cursor.fetchall()
#             print(result)
#             # results:
#             # {'id': 1, 'name': 'Google', 'industry': 'hi tech', 'employees': 1000}, 
#             # {'id': 2, 'name': 'CyberArk', 'industry': 'hi tech', 'employees': 2000}
#     except:
#         print("DB Error")
        