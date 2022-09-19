# from fastapi import FastAPI
# import uvicorn

# app = FastAPI()

# # server code...
# @app.get("/")
# async def root():
#     return {"message": "Hello World"}

# @app.get('/')
# def root():
#     return {"message":"Someone has made a request and accessed the server. Exciting!"}


# @app.get('/maps')
# def maps():
#     return "Here's some stuff related to maps"


# @app.get('/shoobi')
# def shoobi():
#     return "This here is the shoobi *route*"

# @app.get("/landing/{username}")
# async def greet_user(username):
#     return {"message":"Hi there {}".format(username)}


# # To send the parameters, as you can see,
# #  we add a /?{KEY}={VALUE} pair after the route itself.
# @app.get("/optionalParameters/")
# async def query_params(name):
#     return {"message":"Hi there {}".format(name)}

# if __name__ == "__main__":
#     uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
