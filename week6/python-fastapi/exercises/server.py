from fastapi import FastAPI
import uvicorn
from store import store
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()



# server code...
#ex1:
@app.get("/")
async def root():
    return {"message": "Hello World Exercise"}

# part A
@app.get("/sanity")
async def sanity():
    return "Server is up and running smoothly"

# part B
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/static/dog.jpg")
def get_dog():
    return FileResponse('./static/dog.jpg')  

@app.get("/static/example.txt")
def get_text():
    return FileResponse('./static/example.txt')  

#ex2:
@app.get("/item/{name}")
async def get_price(name):
    return next(({"price": x["price"]} for x in store if x["name"] == name), {"price": None})

#ex4:
@app.get("/buy/optionalParameters")
async def buy_item(item):
    for fornitue in store:
        if fornitue["name"] == item:
            fornitue["inventory"]-=1
            price = fornitue["price"]
            inv = fornitue["inventory"]
            return f"Congratulations, you've just bought {item} for {price}. There are {inv} left now in the store."
    return "no such forniture"

#ex6:
@app.get("/sale")
async def buy_item(admin):
    print("hello")
    sale = 1
    if admin != None and bool(admin.lower()):
        sale = 0.5     
        for item in store:
            if item["inventory"] > 10:
                item["price"]*=sale
        
        return store


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
