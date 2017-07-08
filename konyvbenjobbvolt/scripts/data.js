var myObj, movies;
myObj = {
  "movies": [
      {
          "title": "Harry Potter and the Sorcerer's Stone",
          "image": "harry-potter-and-the-sorcerers-stone.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0241527",
          "URLGoodreads": "3.Harry_Potter_and_the_Sorcerer_s_Stone",
          "rateImdb": "7.5",
          "rateGoodreads": "4.44"

      },
      {
          "title": "Harry Potter and the Chamber of Secrets",
          "image": "harry-potter-and-the-chamber-of-secrets.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0295297",
          "URLGoodreads": "15881.Harry_Potter_and_the_Chamber_of_Secrets",
          "rateImdb": "7.4",
          "rateGoodreads": "4.37"
      },
      {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "image": "harry-potter-and-the-prisoner-of-azkaban.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0304141",
          "URLGoodreads": "5.Harry_Potter_and_the_Prisoner_of_Azkaban",
          "rateImdb": "7.8",
          "rateGoodreads": "4.53"
      },
      {
          "title": "Harry Potter and the Goblet of Fire",
          "image": "harry-potter-and-the-goblet-of-fire.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0330373",
          "URLGoodreads": "6.Harry_Potter_and_the_Goblet_of_Fire",
          "rateImdb": "7.7",
          "rateGoodreads": "4.52"

      },
      {
          "title": "Harry Potter and the Order of the Phoenix",
          "image": "harry-potter-and-the-order-of-phoenix.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0373889",
          "URLGoodreads": "2.Harry_Potter_and_the_Order_of_the_Phoenix",
          "rateImdb": "7.5",
          "rateGoodreads": "4.46"
      },
      {
          "title": "Harry Potter and the Half-Blood Prince",
          "image": "harry-potter-and-the-halfblood-prince.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0417741",
          "URLGoodreads": "1.Harry_Potter_and_the_Half_Blood_Prince",
          "rateImdb": "7.5",
          "rateGoodreads": "4.54"
      },
      {
          "title": "Harry Potter and the Deathly Hallows",
          "image": "harry-potter-and-the-deathly-shallows.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0926084",
          "URLGoodreads": "136251.Harry_Potter_and_the_Deathly_Hallows",
          "rateImdb": "7.7",
          "rateGoodreads": "4.61"
      },
      {
          "title": "Arrival",
          "image": "arrival.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2543164",
          "URLGoodreads": "223380.Stories_of_Your_Life_and_Others",
          "rateImdb": "8.0",
          "rateGoodreads": "4.27"
      },
      {
          "title": "The Hundred-Year-Old Man Who Climbed Out of the Window and Disappeared",
          "image": "the-man-who.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2113681",
          "URLGoodreads": "13486632-the-hundred-year-old-man-who-climbed-out-of-the-window-and-disappeared",
          "rateImdb": "7.1",
          "rateGoodreads": "3.81"
      },
      {
          "title": "The Help",
          "image": "help.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1454029",
          "URLGoodreads": "4667024-the-help",
          "rateImdb": "8.1",
          "rateGoodreads": "4.45"

      },
      {
          "title": "Stardust",
          "image": "stardust.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0486655",
          "URLGoodreads": "16793.Stardust",
          "rateImdb": "7.7",
          "rateGoodreads": "4.07"
      },
      {
          "title": "American Gods",
          "image": "american-gods.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1898069",
          "URLGoodreads": "30165203-american-godsn",
          "rateImdb": "8.4",
          "rateGoodreads": "4.11"
      },
      {
          "title": "Sin City",
          "image": "sin-city.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0401792",
          "URLGoodreads": "392297.Sin_City_Vol_1",
          "rateImdb": "8.0",
          "rateGoodreads": "4.16"

      },
      {
          "title": "Watchmen",
          "image": "watchmen.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0409459",
          "URLGoodreads": "472331.Watchmen",
          "rateImdb": "7.6",
          "rateGoodreads": "4.35"
      },
      {
          "title": "Jonathan Strange & Mr Norrell",
          "image": "jonathan-strange.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2548418",
          "URLGoodreads": "14201.Jonathan_Strange_Mr_Norrell",
          "rateImdb": "8.2",
          "rateGoodreads": "3.80"

      },
      {
          "title": "The Adjustment Bureau",
          "image": "the-adjustment-bureau.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1385826",
          "URLGoodreads": "10335790-adjustment-team",
          "rateImdb": "7.1",
          "rateGoodreads": "3.68"
      },
      {
          "title": "Minority Report",
          "image": "minority-report.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0181689",
          "URLGoodreads": "581125.The_Minority_Report",
          "rateImdb": "7.7",
          "rateGoodreads": "3.82"
      },
      {
          "title": "A Scanner Darkly",
          "image": "scanner-darkly.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0405296",
          "URLGoodreads": "14817.A_Scanner_Darkly",
          "rateImdb": "7.1",
          "rateGoodreads": "4.04"
      },
      {
          "title": "The Shining",
          "image": "the-shining.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0081505",
          "URLGoodreads": "11588.The_Shining",
          "rateImdb": "8.4",
          "rateGoodreads": "4.17"
      },
      {
          "title": "IT",
          "image": "it.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0099864",
          "URLGoodreads": "830502.It",
          "rateImdb": "6.9",
          "rateGoodreads": "4.18"
      },
      {
          "title": "Carrie",
          "image": "carrie.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0074285",
          "URLGoodreads": "10592.Carrie",
          "rateImdb": "7.4",
          "rateGoodreads": "3.92"
      },
      {
          "title": "The Running Man",
          "image": "the-running-man.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0093894",
          "URLGoodreads": "11607.The_Running_Man",
          "rateImdb": "6.6",
          "rateGoodreads": "3.8"
      },
      {
          "title": "Pet Sematary",
          "image": "pet-sematary.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0098084",
          "URLGoodreads": "33124137-pet-sematary",
          "rateImdb": "6.6",
          "rateGoodreads": "3.91"
      },
      {
          "title": "Misery",
          "image": "misery.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0100157",
          "URLGoodreads": "10614.Misery",
          "rateImdb": "7.8",
          "rateGoodreads": "4.11"
      },
      {
          "title": "Needful Things",
          "image": "needful-things.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0107665",
          "URLGoodreads": "107291.Needful_Things",
          "rateImdb": "6.2",
          "rateGoodreads": "3.87"
      },
      {
          "title": "Dolores Claiborne",
          "image": "dolores-claiborne.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0109642",
          "URLGoodreads": "7278752-dolores-claiborne",
          "rateImdb": "7.4",
          "rateGoodreads": "3.81"
      },
      {
          "title": "Christine",
          "image": "christine.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0085333",
          "URLGoodreads": "10629.Christine",
          "rateImdb": "6.6",
          "rateGoodreads": "3.72"
      },
      {
          "title": "American Psycho",
          "image": "american-psycho.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0144084",
          "URLGoodreads": "28676.American_Psycho",
          "rateImdb": "7.6",
          "rateGoodreads": "3.81"
      },
      {
          "title": "Tinker Tailor Soldier Spy",
          "image": "tinker-tailor-soldier-spy.jpg",
          "answer": "Nem.",
          "URLImdb": "tt1340800",
          "URLGoodreads": "18989.Tinker_Tailor_Soldier_Spy",
          "rateImdb": "7.1",
          "rateGoodreads": "4.03"
      },
      {
          "title": "Mystic River",
          "image": "mystic-river.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0327056",
          "URLGoodreads": "21671.Mystic_River",
          "rateImdb": "8.0",
          "rateGoodreads": "4.19"
      },
      {
          "title": "Stand by Me",
          "image": "stand-by-me.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0092005",
          "URLGoodreads": "11574.The_Body",
          "rateImdb": "8.1",
          "rateGoodreads": "4.26"
      },
      {
          "title": "1984",
          "image": "1984.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0087803",
          "URLGoodreads": "5470.1984",
          "rateImdb": "7.24",
          "rateGoodreads": "4.14"
      },
      {
          "title": "Lord of the Flies",
          "image": "lord-of-the-flies.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0057261",
          "URLGoodreads": "7624.Lord_of_the_Flies",
          "rateImdb": "7.0",
          "rateGoodreads": "3.64"
      },
      {
          "title": "Stalker",
          "image": "stalker.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0079944",
          "URLGoodreads": "331256.Roadside_Picnic",
          "rateImdb": "8.1",
          "rateGoodreads": "4.21"
      },
      {
          "title": "Childhood's End",
          "image": "childhoods-end.jpg",
          "answer": "Igen.",
          "URLImdb": "tt4146128",
          "URLGoodreads": "414999.Childhood_s_End",
          "rateImdb": "6.9",
          "rateGoodreads": "4.09"
      },
      {
          "title": "World War Z",
          "image": "world-war-z.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0816711",
          "URLGoodreads": "8908.World_War_Z",
          "rateImdb": "7.0",
          "rateGoodreads": "4.01"
      },
      {
          "title": "Blade Runner",
          "image": "blade-runner.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0083658",
          "URLGoodreads": "7082.Do_Androids_Dream_of_Electric_Sheep_",
          "rateImdb": "8.2",
          "rateGoodreads": "4.08"
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
document.getElementById("ratingImdb").innerHTML = movies.rateImdb;
document.getElementById("ratingGoodreads").innerHTML = movies.rateGoodreads;
