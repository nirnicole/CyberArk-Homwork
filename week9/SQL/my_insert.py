if connection.open:
    print("the connection is opened")
    try:
        with connection.cursor() as cursor:
            query = 'INSERT into company (name,industry, employees) values ("Wix", "hi tech", 4000)'
            cursor.execute(query)
            connection.commit()
    except:
        print("Error")