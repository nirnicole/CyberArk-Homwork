from functools import total_ordering
import heapq
from fastapi import FastAPI
import uvicorn
from fastapi import status, Response
import re
from heapq import heappop, heappush, heapify


app = FastAPI()
wordCounter = {
    "happy": 2
}


@total_ordering
class Wrapper:
    def __init__(self, items={}):
        self.key, self.val = items[0], items[1] 
    def __lt__(self, other):
        return self.val > other.val
 
    def __eq__(self, other):
        return self.val == other.val

@app.get('/')
def root():
    return "server is up and running.."
    
@app.get('/sanity')
def sanity():
    return "sanity check"

@app.get('/get')
def get_word(word):
    return {"count": wordCounter[word]} if word in wordCounter else {"count": 0}
    
@app.get('/most-used')
def get_word():
    # most_used = {}
    # max = 0
    # for key, value in wordCounter.items():
    #     if value > max:
    #         most_used = {key: value}
    # return most_used
    res = heapq.heappop(get_most_common(1))
    return {res.key: res.val}
    
@app.get('/top-5')
def get_top():
    results = get_most_common(5)
    return {"rankings",results}

def get_most_common(size=5):
    # Creating empty heap
    heap = list(wordCounter.items())
    wrapper_heap = list(map(lambda item: Wrapper(item), heap))
    heapq.heapify(wrapper_heap)
    res = []
    size = size if size<len(wordCounter) else len(wordCounter)
    for i in range(size):
        res.append(heapq.heappop(wrapper_heap))
    return res
 

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
    word = ignore_special_chars(word)
    if word in wordCounter:
        wordCounter[word] +=1
    else:
        wordCounter[word] = 1
    return wordCounter[word]

def ignore_special_chars(word):
    return "".join(re.findall(r"[a-z]", word))

@app.get('/word-count')
def total_words():
    sum = 0 
    for key, value in wordCounter.items():
        sum = sum + value
    return {"total",value}


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)