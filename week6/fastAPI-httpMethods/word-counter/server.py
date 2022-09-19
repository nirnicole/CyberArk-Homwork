from fastapi import FastAPI
import uvicorn
from fastapi import Request
from fastapi import status, Response

app = FastAPI()
wordCounter = {
    "happy": 2
}


@app.get('/')
def root():
    return "server is up and running.."
    
@app.get('/sanity')
def sanity():
    return "sanity check"

@app.get('/get')
def get_word(word):
    return {"count": wordCounter[word]} if word in wordCounter else {"count": 0}
    
@app.post('/add/', status_code=201)
def add_word(word=None, sentence=None):
    if word != None:
        count = inc_word(word)
        return {"text": f"Added {word}, currentCount: {count}"}
    elif sentence != None:
        numOldWords = len(wordCounter)
        for word in sentence.split():
            inc_word(word)
        numNewWords = len(wordCounter) - numOldWords
        return {"text", f"Added {numNewWords} words, {numOldWords} already existed"}


@app.delete('/delete/{word}')
def delete_word(word, response: Response):
    deleted_count =0
    try:
        deleted_count = wordCounter[word]
        del wordCounter[word]
    except KeyError:
        response.status_code = status.HTTP_404_NOT_FOUND
    return {word: deleted_count}

def inc_word(word):
    if word in wordCounter:
        wordCounter[word] +=1
    else:
        wordCounter[word] = 1
    return wordCounter[word]


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)