var myObj, movies;
myObj = {
  "movies": [
      {
          "title": "Harry Potter and the Philosopher's Stone",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"

      },
      {
          "title": "Harry Potter and the Chamber of Secrets",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Harry Potter and the Goblet of Fire",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"

      },
      {
          "title": "Harry Potter and the Order of the Phoenix",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Harry Potter and the Half-Blood Prince",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Harry Potter and the Deathly Hallows",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"

      },
      {
          "title": "Arrival",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "The 100 Year-Old Man Who Climbed Out the Window and Disappeared",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Help",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"

      },
      {
          "title": "Stardust",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "American Gods",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Sin City",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"

      },
      {
          "title": "Watchmen",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Jonathan Strange & Mr Norrell",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"

      },
      {
          "title": "The Adjustment Bureau",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Minority Report",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Scanner Darkly",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "The Shining",
          "answer": "Nem.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "IT",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Carrie",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "The Running Man",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Pet Sematary",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Misery",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Needful Things",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Dolores Claiborne",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Christine",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "American Psycho",
          "answer": "Igen.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Tinker Tailor Soldier Spy",
          "answer": "Nem.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Mystic River",
          "answer": "Nem.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      },
      {
          "title": "Stand by Me",
          "answer": "Nem.",
          "URLImdb": "#",
          "URLGoodreads": "#"
      }
    ]
  }

movies = myObj.movies[Math.floor(Math.random() * myObj.movies.length)];

document.getElementById("movieTitle").innerHTML = movies.title;
document.getElementById("movieAnswer").innerHTML = movies.answer;

function reloadPage() {
    location.reload();
}
