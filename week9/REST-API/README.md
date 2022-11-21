1.

POST http://api.movieapp.com/actors HTTP/1.1

{
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 9.93
}

HTTP/1.1 201 Created
Location: /actors/283

{
"id": 283,
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 9.93
}

GET http://api.movieapp.com/actors/283 HTTP/1.1

{

}

{
"name": "Brad Pitt",
"bio": "William Bradley Pitt (born December 18, 1963) is…",
"birthday": "1963-12-18",
"deathday": null,
"gender": 2,
"popularity": 9.93
}
