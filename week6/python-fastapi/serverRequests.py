# from fastapi import FastAPI
# import uvicorn
# import requests 

# app = FastAPI()

# # server code...
# @app.get("/book/{name}")
# async def get_book(name):
#     res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
#     return res.json()


# if __name__ == "__main__":
#     uvicorn.run("serverExternalApi:app", host="0.0.0.0", port=8000, reload=True)
