# from fastapi import FastAPI
# import uvicorn
# from fastapi.staticfiles import StaticFiles

# app = FastAPI()

# # server code...
# @app.get("/")
# async def root():
#     return {"message": "Hello World2"}

# app.mount("/static", StaticFiles(directory="static"), name="static")

# if __name__ == "__main__":
#     uvicorn.run("serverStatic:app", host="0.0.0.0", port=8000, reload=True)
