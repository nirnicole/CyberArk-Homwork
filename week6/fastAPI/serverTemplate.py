from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get('/')
def root():
    return "server is up and running.."
    
@app.get('/sanity')
def sanity():
    return "sanity check"


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)