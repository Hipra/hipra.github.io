var myObj, movies;
myObj = {
  "movies": [
      {
          "title": "Harry Potter and the Sorcerer's Stone",
          "image": "harry-potter-and-the-sorcerers-stone.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0241527",
          "URLGoodreads": "3.Harry_Potter_and_the_Sorcerer_s_Stone"

      },
      {
          "title": "Harry Potter and the Chamber of Secrets",
          "image": "harry-potter-and-the-chamber-of-secrets.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0295297",
          "URLGoodreads": "15881.Harry_Potter_and_the_Chamber_of_Secrets"
      },
      {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "image": "harry-potter-and-the-prisoner-of-azkaban.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0304141",
          "URLGoodreads": "5.Harry_Potter_and_the_Prisoner_of_Azkaban"
      },
      {
          "title": "Harry Potter and the Goblet of Fire",
          "image": "harry-potter-and-the-goblet-of-fire.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0330373",
          "URLGoodreads": "6.Harry_Potter_and_the_Goblet_of_Fire"

      },
      {
          "title": "Harry Potter and the Order of the Phoenix",
          "image": "harry-potter-and-the-order-of-phoenix.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0373889",
          "URLGoodreads": "2.Harry_Potter_and_the_Order_of_the_Phoenix"
      },
      {
          "title": "Harry Potter and the Half-Blood Prince",
          "image": "harry-potter-and-the-halfblood-prince.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0417741",
          "URLGoodreads": "1.Harry_Potter_and_the_Half_Blood_Prince"
      },
      {
          "title": "Harry Potter and the Deathly Hallows",
          "image": "harry-potter-and-the-deathly-shallows.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0926084",
          "URLGoodreads": "136251.Harry_Potter_and_the_Deathly_Hallows"
      },
      {
          "title": "Arrival",
          "image": "arrival.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2543164",
          "URLGoodreads": "223380.Stories_of_Your_Life_and_Others"
      },
      {
          "title": "The Hundred-Year-Old Man Who Climbed Out of the Window and Disappeared",
          "image": "the-man-who.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2113681",
          "URLGoodreads": "13486632-the-hundred-year-old-man-who-climbed-out-of-the-window-and-disappeared"
      },
      {
          "title": "Help",
          "image": "help.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1454029",
          "URLGoodreads": "4667024-the-help"

      },
      {
          "title": "Stardust",
          "image": "stardust.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0486655",
          "URLGoodreads": "16793.Stardust"
      },
      {
          "title": "American Gods",
          "image": "american-gods.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1898069",
          "URLGoodreads": "30165203-american-godsn"
      },
      {
          "title": "Sin City",
          "image": "sin-city.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0401792",
          "URLGoodreads": "392297.Sin_City_Vol_1"

      },
      {
          "title": "Watchmen",
          "image": "watchmen.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0409459",
          "URLGoodreads": "472331.Watchmen"
      },
      {
          "title": "Jonathan Strange & Mr Norrell",
          "image": "jonathan-strange.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2548418",
          "URLGoodreads": "14201.Jonathan_Strange_Mr_Norrell"

      },
      {
          "title": "The Adjustment Bureau",
          "image": "the-adjustment-bureau.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1385826",
          "URLGoodreads": "10335790-adjustment-team"
      },
      {
          "title": "Minority Report",
          "image": "minority-report.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0181689",
          "URLGoodreads": "581125.The_Minority_Report"
      },
      {
          "title": "Scanner Darkly",
          "image": "scanner-darkly.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0405296",
          "URLGoodreads": "14817.A_Scanner_Darkly"
      },
      {
          "title": "The Shining",
          "image": "the-shining.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0081505",
          "URLGoodreads": "11588.The_Shining"
      },
      {
          "title": "IT",
          "image": "it.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0099864",
          "URLGoodreads": "830502.It"
      },
      {
          "title": "Carrie",
          "image": "carrie.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0074285",
          "URLGoodreads": "10592.Carrie"
      },
      {
          "title": "The Running Man",
          "image": "the-running-man.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0093894",
          "URLGoodreads": "11607.The_Running_Man"
      },
      {
          "title": "Pet Sematary",
          "image": "pet-sematary.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0098084",
          "URLGoodreads": "33124137-pet-sematary"
      },
      {
          "title": "Misery",
          "image": "misery.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0100157",
          "URLGoodreads": "10614.Misery"
      },
      {
          "title": "Needful Things",
          "image": "needful-things.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0107665",
          "URLGoodreads": "107291.Needful_Things"
      },
      {
          "title": "Dolores Claiborne",
          "image": "dolores-claiborne.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0109642",
          "URLGoodreads": "7278752-dolores-claiborne"
      },
      {
          "title": "Christine",
          "image": "christine.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0085333",
          "URLGoodreads": "10629.Christine"
      },
      {
          "title": "American Psycho",
          "image": "american-psycho.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0144084",
          "URLGoodreads": "28676.American_Psycho"
      },
      {
          "title": "Tinker Tailor Soldier Spy",
          "image": "tinker-tailor-soldier-spy.jpg",
          "answer": "Nem.",
          "URLImdb": "tt1340800",
          "URLGoodreads": "18989.Tinker_Tailor_Soldier_Spy"
      },
      {
          "title": "Mystic River",
          "image": "mystic-river.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0327056",
          "URLGoodreads": "21671.Mystic_River"
      },
      {
          "title": "Stand by Me",
          "image": "stand-by-me.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0092005",
          "URLGoodreads": "11574.The_Body"
      },
      {
          "title": "1984",
          "image": "1984.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0087803",
          "URLGoodreads": "5470.1984"
      }
    ]
  }

movies = myObj.movies[Math.floor(Math.random() * myObj.movies.length)];

document.getElementById("movieTitle").innerHTML = movies.title;
document.getElementById("movieAnswer").innerHTML = movies.answer;
document.getElementById('movieImage').style.backgroundImage = 'url(' + "images/" + movies.image + ')';
document.getElementById("movieImdb").href = 'http://www.imdb.com/title/' + movies.URLImdb;
document.getElementById("movieImdb").target = "_blank";
document.getElementById("movieGoodreads").href = 'https://www.goodreads.com/book/show/' + movies.URLGoodreads;
document.getElementById("movieGoodreads").target = "_blank";
