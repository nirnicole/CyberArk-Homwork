import pymysql 
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

### ex1 :


# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE categories( \
#                                 name VARCHAR(20) PRIMARY KEY \
#                                         )"
#         cursor.execute(query)
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = "CREATE TABLE products( \
#                                 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, \
#                                 name VARCHAR(20), \
#                                 category VARCHAR(20), \
#                                 FOREIGN KEY(category) REFERENCES categories(name) \
#                                       )"
#         cursor.execute(query)
# except Exception as ex:
#     template = "An exception of type {0} occurred. Arguments:\n{1!r}"
#     message = template.format(type(ex).__name__, ex.args)
#     print(message)

# try:
#     with connection.cursor() as cursor:
#         query = "INSERT into categories (name) values ('Fruites'), \
#                                                       ('Veg')"
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

# try:
#     with connection.cursor() as cursor:
#         query = "INSERT into products values(null,'Apple','Fruites')"
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")


# ex2:

# try:
#     with connection.cursor() as cursor:
#         query = "SELECT *  \
#                 FROM products p \
#                 WHERE p.category = 'Fruites'"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)

# except:
#     print("Error")

# ex3:

# try:
#     with connection.cursor() as cursor:
#         query = "SELECT *  \
#                 FROM products p \
#                 WHERE p.id = 1"
#         cursor.execute(query)
#         result = cursor.fetchall()
#         print(result)

# except:
#     print("Error")











# def table_query(table_name, args):
#     proccesed_string = ""
#     for value in args:
#         print(value)
#         proccesed_string += value + ", "
#     if len(proccesed_string) > 0:
#         proccesed_string = proccesed_string[:-2]
#     return f"CREATE TABLE {table_name}({proccesed_string});"

# if connection.open:
#     print("the connection is opened")
#     try:
#         with connection.cursor() as cursor:
#             # query = table_query("categories",["c_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY", "c_name VARCHAR(20)"])
#             # cursor.execute(query)
#             query = table_query("products",["p_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY", "p_name VARCHAR(20)", "price INT", "category VARCHAR(20)", "FOREIGN KEY(category) REFERENCES categories(c_name)"])
#             print(query)
#             cursor.execute(query)
#     except Exception as ex:
#         template = "An exception of type {0} occurred. Arguments:\n{1!r}"
#         message = template.format(type(ex).__name__, ex.args)
#         print(message)

