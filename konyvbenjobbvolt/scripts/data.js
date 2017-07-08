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
          "rateGoodreads": "4.44",
          "URLRotten": "/m/harry_potter_and_the_sorcerers_stone",
          "rateRotten": "7.1"

      },
      {
          "title": "Harry Potter and the Chamber of Secrets",
          "image": "harry-potter-and-the-chamber-of-secrets.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0295297",
          "URLGoodreads": "15881.Harry_Potter_and_the_Chamber_of_Secrets",
          "rateImdb": "7.4",
          "rateGoodreads": "4.37",
          "URLRotten": "/m/harry_potter_and_the_chamber_of_secrets",
          "rateRotten": "7.2"
      },
      {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "image": "harry-potter-and-the-prisoner-of-azkaban.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0304141",
          "URLGoodreads": "5.Harry_Potter_and_the_Prisoner_of_Azkaban",
          "rateImdb": "7.8",
          "rateGoodreads": "4.53",
          "URLRotten": "/m/harry_potter_and_the_prisoner_of_azkaban",
          "rateRotten": "7.9"
      },
      {
          "title": "Harry Potter and the Goblet of Fire",
          "image": "harry-potter-and-the-goblet-of-fire.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0330373",
          "URLGoodreads": "6.Harry_Potter_and_the_Goblet_of_Fire",
          "rateImdb": "7.7",
          "rateGoodreads": "4.52",
          "URLRotten": "/m/harry_potter_and_the_goblet_of_fire",
          "rateRotten": "7.5"

      },
      {
          "title": "Harry Potter and the Order of the Phoenix",
          "image": "harry-potter-and-the-order-of-phoenix.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0373889",
          "URLGoodreads": "2.Harry_Potter_and_the_Order_of_the_Phoenix",
          "rateImdb": "7.5",
          "rateGoodreads": "4.46",
          "URLRotten": "/m/harry_potter_and_the_order_of_the_phoenix",
          "rateRotten": "6.9"
      },
      {
          "title": "Harry Potter and the Half-Blood Prince",
          "image": "harry-potter-and-the-halfblood-prince.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0417741",
          "URLGoodreads": "1.Harry_Potter_and_the_Half_Blood_Prince",
          "rateImdb": "7.5",
          "rateGoodreads": "4.54",
          "URLRotten": "/m/harry_potter_and_the_half_blood_prince",
          "rateRotten": "7.1"
      },
      {
          "title": "Harry Potter and the Deathly Hallows",
          "image": "harry-potter-and-the-deathly-shallows.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0926084",
          "URLGoodreads": "136251.Harry_Potter_and_the_Deathly_Hallows",
          "rateImdb": "7.7",
          "rateGoodreads": "4.61",
          "URLRotten": "/m/harry_potter_and_the_deathly_hallows_part_1",
          "rateRotten": "7.1"
      },
      {
          "title": "Arrival",
          "image": "arrival.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2543164",
          "URLGoodreads": "223380.Stories_of_Your_Life_and_Others",
          "rateImdb": "8.0",
          "rateGoodreads": "4.27",
          "URLRotten": "/m/arrival_2016",
          "rateRotten": "8.3"
      },
      {
          "title": "The Hundred-Year-Old Man Who Climbed Out of the Window and Disappeared",
          "image": "the-man-who.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2113681",
          "URLGoodreads": "13486632-the-hundred-year-old-man-who-climbed-out-of-the-window-and-disappeared",
          "rateImdb": "7.1",
          "rateGoodreads": "3.81",
          "URLRotten": "/m/the_100_year_old_man_who_climbed_out_the_window_and_disappeared",
          "rateRotten": "6"
      },
      {
          "title": "The Help",
          "image": "help.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1454029",
          "URLGoodreads": "4667024-the-help",
          "rateImdb": "8.1",
          "rateGoodreads": "4.45",
          "URLRotten": "/m/the_help",
          "rateRotten": "7.1"

      },
      {
          "title": "Stardust",
          "image": "stardust.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0486655",
          "URLGoodreads": "16793.Stardust",
          "rateImdb": "7.7",
          "rateGoodreads": "4.07",
          "URLRotten": "/m/stardust",
          "rateRotten": "6.7"
      },
      {
          "title": "American Gods",
          "image": "american-gods.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1898069",
          "URLGoodreads": "30165203-american-godsn",
          "rateImdb": "8.4",
          "rateGoodreads": "4.11",
          "URLRotten": "/tv/american_gods/s01",
          "rateRotten": "8.13"
      },
      {
          "title": "Sin City",
          "image": "sin-city.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0401792",
          "URLGoodreads": "392297.Sin_City_Vol_1",
          "rateImdb": "8.0",
          "rateGoodreads": "4.16",
          "URLRotten": "/m/sin_city",
          "rateRotten": "7.5"

      },
      {
          "title": "Watchmen",
          "image": "watchmen.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0409459",
          "URLGoodreads": "472331.Watchmen",
          "rateImdb": "7.6",
          "rateGoodreads": "4.35",
          "URLRotten": "/m/watchmen",
          "rateRotten": "6.3"
      },
      {
          "title": "Jonathan Strange & Mr Norrell",
          "image": "jonathan-strange.jpg",
          "answer": "Igen.",
          "URLImdb": "tt2548418",
          "URLGoodreads": "14201.Jonathan_Strange_Mr_Norrell",
          "rateImdb": "8.2",
          "rateGoodreads": "3.80",
          "URLRotten": "/tv/jonathan_strange_mr_norrell/s01",
          "rateRotten": "7.68"

      },
      {
          "title": "The Adjustment Bureau",
          "image": "the-adjustment-bureau.jpg",
          "answer": "Igen.",
          "URLImdb": "tt1385826",
          "URLGoodreads": "10335790-adjustment-team",
          "rateImdb": "7.1",
          "rateGoodreads": "3.68",
          "URLRotten": "/m/adjustment_bureau",
          "rateRotten": "6.6"
      },
      {
          "title": "Minority Report",
          "image": "minority-report.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0181689",
          "URLGoodreads": "581125.The_Minority_Report",
          "rateImdb": "7.7",
          "rateGoodreads": "3.82",
          "URLRotten": "/m/minority_report",
          "rateRotten": "8.1"
      },
      {
          "title": "A Scanner Darkly",
          "image": "scanner-darkly.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0405296",
          "URLGoodreads": "14817.A_Scanner_Darkly",
          "rateImdb": "7.1",
          "rateGoodreads": "4.04",
          "URLRotten": "/m/scanner_darkly",
          "rateRotten": "6.6"
      },
      {
          "title": "The Shining",
          "image": "the-shining.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0081505",
          "URLGoodreads": "11588.The_Shining",
          "rateImdb": "8.4",
          "rateGoodreads": "4.17",
          "URLRotten": "/m/shining",
          "rateRotten": "8.4"
      },
      {
          "title": "IT",
          "image": "it.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0099864",
          "URLGoodreads": "830502.It",
          "rateImdb": "6.9",
          "rateGoodreads": "4.18",
          "URLRotten": "/m/stephen_kings_it1990",
          "rateRotten": "5.5"
      },
      {
          "title": "Carrie",
          "image": "carrie.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0074285",
          "URLGoodreads": "10592.Carrie",
          "rateImdb": "7.4",
          "rateGoodreads": "3.92",
          "URLRotten": "/m/1003625_carrie",
          "rateRotten": "8.4"
      },
      {
          "title": "The Running Man",
          "image": "the-running-man.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0093894",
          "URLGoodreads": "11607.The_Running_Man",
          "rateImdb": "6.6",
          "rateGoodreads": "3.8",
          "URLRotten": "/m/running_man",
          "rateRotten": "5.5"
      },
      {
          "title": "Pet Sematary",
          "image": "pet-sematary.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0098084",
          "URLGoodreads": "33124137-pet-sematary",
          "rateImdb": "6.6",
          "rateGoodreads": "3.91",
          "URLRotten": "/m/pet_sematary",
          "rateRotten": "5.2"
      },
      {
          "title": "Misery",
          "image": "misery.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0100157",
          "URLGoodreads": "10614.Misery",
          "rateImdb": "7.8",
          "rateGoodreads": "4.11",
          "URLRotten": "/m/misery",
          "rateRotten": "7.5"
      },
      {
          "title": "Needful Things",
          "image": "needful-things.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0107665",
          "URLGoodreads": "107291.Needful_Things",
          "rateImdb": "6.2",
          "rateGoodreads": "3.87",
          "URLRotten": "/m/needful_things",
          "rateRotten": "4"
      },
      {
          "title": "Dolores Claiborne",
          "image": "dolores-claiborne.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0109642",
          "URLGoodreads": "7278752-dolores-claiborne",
          "rateImdb": "7.4",
          "rateGoodreads": "3.81",
          "URLRotten": "/m/dolores_claiborne",
          "rateRotten": "6.6"
      },
      {
          "title": "Christine",
          "image": "christine.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0085333",
          "URLGoodreads": "10629.Christine",
          "rateImdb": "6.6",
          "rateGoodreads": "3.72",
          "URLRotten": "/m/christine",
          "rateRotten": "5.9"
      },
      {
          "title": "American Psycho",
          "image": "american-psycho.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0144084",
          "URLGoodreads": "28676.American_Psycho",
          "rateImdb": "7.6",
          "rateGoodreads": "3.81",
          "URLRotten": "",
          "rateRotten": ""
      },
      {
          "title": "Tinker Tailor Soldier Spy",
          "image": "tinker-tailor-soldier-spy.jpg",
          "answer": "Nem.",
          "URLImdb": "tt1340800",
          "URLGoodreads": "18989.Tinker_Tailor_Soldier_Spy",
          "rateImdb": "7.1",
          "rateGoodreads": "4.03",
          "URLRotten": "/m/tinker_tailor_soldier_spy",
          "rateRotten": "7.8"
      },
      {
          "title": "Mystic River",
          "image": "mystic-river.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0327056",
          "URLGoodreads": "21671.Mystic_River",
          "rateImdb": "8.0",
          "rateGoodreads": "4.19",
          "URLRotten": "/m/mystic_river",
          "rateRotten": "7.7"
      },
      {
          "title": "Stand by Me",
          "image": "stand-by-me.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0092005",
          "URLGoodreads": "11574.The_Body",
          "rateImdb": "8.1",
          "rateGoodreads": "4.26",
          "URLRotten": "/m/stand_by_me_1986",
          "rateRotten": "8"
      },
      {
          "title": "1984",
          "image": "1984.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0087803",
          "URLGoodreads": "5470.1984",
          "rateImdb": "7.24",
          "rateGoodreads": "4.14",
          "URLRotten": "/m/1984_1984",
          "rateRotten": "6.7"
      },
      {
          "title": "Lord of the Flies",
          "image": "lord-of-the-flies.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0057261",
          "URLGoodreads": "7624.Lord_of_the_Flies",
          "rateImdb": "7.0",
          "rateGoodreads": "3.64",
          "URLRotten": "/m/lord_of_the_flies_1963",
          "rateRotten": "8.3"
      },
      {
          "title": "Stalker",
          "image": "stalker.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0079944",
          "URLGoodreads": "331256.Roadside_Picnic",
          "rateImdb": "8.1",
          "rateGoodreads": "4.21",
          "URLRotten": "/m/1043378_stalker",
          "rateRotten": "8.2"
      },
      {
          "title": "Childhood's End",
          "image": "childhoods-end.jpg",
          "answer": "Igen.",
          "URLImdb": "tt4146128",
          "URLGoodreads": "414999.Childhood_s_End",
          "rateImdb": "6.9",
          "rateGoodreads": "4.09",
          "URLRotten": "/tv/childhood_s_end/s01",
          "rateRotten": "6.7"
      },
      {
          "title": "World War Z",
          "image": "world-war-z.jpg",
          "answer": "Igen.",
          "URLImdb": "tt0816711",
          "URLGoodreads": "8908.World_War_Z",
          "rateImdb": "7.0",
          "rateGoodreads": "4.01",
          "URLRotten": "/m/world_war_z",
          "rateRotten": "6.2"
      },
      {
          "title": "Blade Runner",
          "image": "blade-runner.jpg",
          "answer": "Nem.",
          "URLImdb": "tt0083658",
          "URLGoodreads": "7082.Do_Androids_Dream_of_Electric_Sheep_",
          "rateImdb": "8.2",
          "rateGoodreads": "4.08",
          "URLRotten": "/m/blade_runner",
          "rateRotten": "8.5"
      }
    ]
  }

movies = myObj.movies[Math.floor(Math.random() * myObj.movies.length)];

document.getElementById("movieTitle").innerHTML = movies.title;
document.getElementById('movieImage').style.backgroundImage = 'url(' + "images/" + movies.image + ')';
document.getElementById("movieRotten").href = 'https://www.rottentomatoes.com' + movies.URLRotten;
document.getElementById("movieRotten").target = "_blank";
document.getElementById("movieGoodreads").href = 'https://www.goodreads.com/book/show/' + movies.URLGoodreads;
document.getElementById("movieGoodreads").target = "_blank";
document.getElementById("ratingRotten").innerHTML = movies.rateRotten;
document.getElementById("ratingGoodreads").innerHTML = movies.rateGoodreads;

var propRotten = movies.rateRotten / 10;
var propGoodreads = movies.rateGoodreads / 5;

if ( propRotten < propGoodreads ) {
    document.getElementById("movieAnswer").innerHTML = "Igen";
} else {
    document.getElementById("movieAnswer").innerHTML = "Nem";
}
