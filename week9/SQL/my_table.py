import pymysql 
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)


def table_query(table_name, args):
    proccesed_string = ""
    for value in args:
        proccesed_string += value + ", "
    if len(proccesed_string) > 0:
        proccesed_string = proccesed_string[:-2]
    return f"CREATE TABLE {table_name}({proccesed_string});"

if connection.open:
    print("the connection is opened")
    try:
        with connection.cursor() as cursor:
            query = table_query("test3",["id INT NOT NULL AUTO_INCREMENT PRIMARY KEY", "name VARCHAR(20)"])
            cursor.execute(query)
    except Exception as ex:
        template = "An exception of type {0} occurred. Arguments:\n{1!r}"
        message = template.format(type(ex).__name__, ex.args)
        print(message)

