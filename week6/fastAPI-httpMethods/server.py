from xml.dom import NotFoundErr
from fastapi import FastAPI
import uvicorn
from fastapi import Request
from fastapi import status, Response

app = FastAPI()

wonders = [
    {
        "ID":1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]

id_counter=1

@app.get('/')
def root():
    return {"message":"Server is up and running"}

@app.post('/wonders' , status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    global id_counter 
    id_counter+=1
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    return "Created"

@app.put("/wonders/{id}")
async def update_wonder(id, name = "default", location = "default location"):
    for wonder in wonders:
        print(wonder)
        if wonder["ID"] == int(id):
            print("updating", wonder["name"])
            return wonder

@app.delete('/wonders/{id}' )
async def delete_wonder(id, response: Response):
    for wonder in wonders:
        print(wonder)
        if wonder["ID"] == int(id):
            print("deleting", wonder["name"])
            return wonder
    response.status_code = status.HTTP_404_NOT_FOUND

@app.get('/get')
def get_by_id(id):
    for wonder in wonders:
        print(wonder)
        if wonder["ID"] == int(id):
            return wonder
    

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)