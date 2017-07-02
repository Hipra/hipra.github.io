var myObj, movies;
myObj = {
  "movies": [
      {
          "title": "Harry Potter and the Sorcerer's Stone",
          "answer": "Igen.",
          "URLImdb": "tt0241527"

      },
      {
          "title": "Harry Potter and the Chamber of Secrets",
          "answer": "Igen.",
          "URLImdb": "tt0295297"
      },
      {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "answer": "Igen.",
          "URLImdb": "tt0304141"
      }
    ]
  }

  movies = myObj.movies[Math.floor(Math.random() * myObj.movies.length)];

  document.getElementById("movieTitle").innerHTML = movies.title;
  document.getElementById("movieAnswer").innerHTML = movies.answer;
