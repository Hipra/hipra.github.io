var myObj, movies;
myObj = {
  "movies": [
      {
          "title": "Harry Potter and the Sorcerer's Stone",
          "image": "harry-potter-and-the-sorcerers-stone.jpg",
          "URLGoodreads": "3.Harry_Potter_and_the_Sorcerer_s_Stone",
          "rateGoodreads": "4.44",
          "URLRotten": "/m/harry_potter_and_the_sorcerers_stone",
          "rateRotten": "7.1"

      },
      {
          "title": "Harry Potter and the Chamber of Secrets",
          "image": "harry-potter-and-the-chamber-of-secrets.jpg",
          "URLGoodreads": "15881.Harry_Potter_and_the_Chamber_of_Secrets",
          "rateGoodreads": "4.37",
          "URLRotten": "/m/harry_potter_and_the_chamber_of_secrets",
          "rateRotten": "7.2"
      },
      {
          "title": "Harry Potter and the Prisoner of Azkaban",
          "image": "harry-potter-and-the-prisoner-of-azkaban.jpg",
          "URLGoodreads": "5.Harry_Potter_and_the_Prisoner_of_Azkaban",
          "rateGoodreads": "4.53",
          "URLRotten": "/m/harry_potter_and_the_prisoner_of_azkaban",
          "rateRotten": "7.9"
      },
      {
          "title": "Harry Potter and the Goblet of Fire",
          "image": "harry-potter-and-the-goblet-of-fire.jpg",
          "URLGoodreads": "6.Harry_Potter_and_the_Goblet_of_Fire",
          "rateGoodreads": "4.52",
          "URLRotten": "/m/harry_potter_and_the_goblet_of_fire",
          "rateRotten": "7.5"

      },
      {
          "title": "Harry Potter and the Order of the Phoenix",
          "image": "harry-potter-and-the-order-of-phoenix.jpg",
          "URLGoodreads": "2.Harry_Potter_and_the_Order_of_the_Phoenix",
          "rateGoodreads": "4.46",
          "URLRotten": "/m/harry_potter_and_the_order_of_the_phoenix",
          "rateRotten": "6.9"
      },
      {
          "title": "Harry Potter and the Half-Blood Prince",
          "image": "harry-potter-and-the-halfblood-prince.jpg",
          "URLGoodreads": "1.Harry_Potter_and_the_Half_Blood_Prince",
          "rateGoodreads": "4.54",
          "URLRotten": "/m/harry_potter_and_the_half_blood_prince",
          "rateRotten": "7.1"
      },
      {
          "title": "Harry Potter and the Deathly Hallows",
          "image": "harry-potter-and-the-deathly-shallows.jpg",
          "URLGoodreads": "136251.Harry_Potter_and_the_Deathly_Hallows",
          "rateGoodreads": "4.61",
          "URLRotten": "/m/harry_potter_and_the_deathly_hallows_part_1",
          "rateRotten": "7.1"
      },
      {
          "title": "Arrival",
          "image": "arrival.jpg",
          "URLGoodreads": "223380.Stories_of_Your_Life_and_Others",
          "rateGoodreads": "4.27",
          "URLRotten": "/m/arrival_2016",
          "rateRotten": "8.3"
      },
      {
          "title": "The Hundred-Year-Old Man Who Climbed Out of the Window and Disappeared",
          "image": "the-man-who.jpg",
          "URLGoodreads": "13486632-the-hundred-year-old-man-who-climbed-out-of-the-window-and-disappeared",
          "rateGoodreads": "3.81",
          "URLRotten": "/m/the_100_year_old_man_who_climbed_out_the_window_and_disappeared",
          "rateRotten": "6"
      },
      {
          "title": "The Help",
          "image": "help.jpg",
          "URLGoodreads": "4667024-the-help",
          "rateGoodreads": "4.45",
          "URLRotten": "/m/the_help",
          "rateRotten": "7.1"

      },
      {
          "title": "Stardust",
          "image": "stardust.jpg",
          "URLGoodreads": "16793.Stardust",
          "rateGoodreads": "4.07",
          "URLRotten": "/m/stardust",
          "rateRotten": "6.7"
      },
      {
          "title": "American Gods",
          "image": "american-gods.jpg",
          "URLGoodreads": "30165203-american-godsn",
          "rateGoodreads": "4.11",
          "URLRotten": "/tv/american_gods/s01",
          "rateRotten": "8.13"
      },
      {
          "title": "Sin City",
          "image": "sin-city.jpg",
          "URLGoodreads": "392297.Sin_City_Vol_1",
          "rateGoodreads": "4.16",
          "URLRotten": "/m/sin_city",
          "rateRotten": "7.5"

      },
      {
          "title": "Watchmen",
          "image": "watchmen.jpg",
          "URLGoodreads": "472331.Watchmen",
          "rateGoodreads": "4.35",
          "URLRotten": "/m/watchmen",
          "rateRotten": "6.3"
      },
      {
          "title": "Jonathan Strange & Mr Norrell",
          "image": "jonathan-strange.jpg",
          "URLGoodreads": "14201.Jonathan_Strange_Mr_Norrell",
          "rateGoodreads": "3.80",
          "URLRotten": "/tv/jonathan_strange_mr_norrell/s01",
          "rateRotten": "7.68"

      },
      {
          "title": "The Adjustment Bureau",
          "image": "the-adjustment-bureau.jpg",
          "URLGoodreads": "10335790-adjustment-team",
          "rateGoodreads": "3.68",
          "URLRotten": "/m/adjustment_bureau",
          "rateRotten": "6.6"
      },
      {
          "title": "Minority Report",
          "image": "minority-report.jpg",
          "URLGoodreads": "581125.The_Minority_Report",
          "rateGoodreads": "3.82",
          "URLRotten": "/m/minority_report",
          "rateRotten": "8.1"
      },
      {
          "title": "A Scanner Darkly",
          "image": "scanner-darkly.jpg",
          "URLGoodreads": "14817.A_Scanner_Darkly",
          "rateGoodreads": "4.04",
          "URLRotten": "/m/scanner_darkly",
          "rateRotten": "6.6"
      },
      {
          "title": "The Shining",
          "image": "the-shining.jpg",
          "URLGoodreads": "11588.The_Shining",
          "rateGoodreads": "4.17",
          "URLRotten": "/m/shining",
          "rateRotten": "8.4"
      },
      {
          "title": "IT",
          "image": "it.jpg",
          "URLGoodreads": "830502.It",
          "rateGoodreads": "4.18",
          "URLRotten": "/m/stephen_kings_it1990",
          "rateRotten": "5.5"
      },
      {
          "title": "Carrie",
          "image": "carrie.jpg",
          "URLGoodreads": "10592.Carrie",
          "rateGoodreads": "3.92",
          "URLRotten": "/m/1003625_carrie",
          "rateRotten": "8.4"
      },
      {
          "title": "The Running Man",
          "image": "the-running-man.jpg",
          "URLGoodreads": "11607.The_Running_Man",
          "rateGoodreads": "3.8",
          "URLRotten": "/m/running_man",
          "rateRotten": "5.5"
      },
      {
          "title": "Pet Sematary",
          "image": "pet-sematary.jpg",
          "URLGoodreads": "33124137-pet-sematary",
          "rateGoodreads": "3.91",
          "URLRotten": "/m/pet_sematary",
          "rateRotten": "5.2"
      },
      {
          "title": "Misery",
          "image": "misery.jpg",
          "URLGoodreads": "10614.Misery",
          "rateGoodreads": "4.11",
          "URLRotten": "/m/misery",
          "rateRotten": "7.5"
      },
      {
          "title": "Needful Things",
          "image": "needful-things.jpg",
          "URLGoodreads": "107291.Needful_Things",
          "rateGoodreads": "3.87",
          "URLRotten": "/m/needful_things",
          "rateRotten": "4"
      },
      {
          "title": "Dolores Claiborne",
          "image": "dolores-claiborne.jpg",
          "URLGoodreads": "7278752-dolores-claiborne",
          "rateGoodreads": "3.81",
          "URLRotten": "/m/dolores_claiborne",
          "rateRotten": "6.6"
      },
      {
          "title": "Christine",
          "image": "christine.jpg",
          "URLGoodreads": "10629.Christine",
          "rateGoodreads": "3.72",
          "URLRotten": "/m/christine",
          "rateRotten": "5.9"
      },
      {
          "title": "American Psycho",
          "image": "american-psycho.jpg",
          "URLGoodreads": "28676.American_Psycho",
          "rateGoodreads": "3.81",
          "URLRotten": "/m/american_psycho",
          "rateRotten": "6.3"
      },
      {
          "title": "Tinker Tailor Soldier Spy",
          "image": "tinker-tailor-soldier-spy.jpg",
          "URLGoodreads": "18989.Tinker_Tailor_Soldier_Spy",
          "rateGoodreads": "4.03",
          "URLRotten": "/m/tinker_tailor_soldier_spy",
          "rateRotten": "7.8"
      },
      {
          "title": "Mystic River",
          "image": "mystic-river.jpg",
          "URLGoodreads": "21671.Mystic_River",
          "rateGoodreads": "4.19",
          "URLRotten": "/m/mystic_river",
          "rateRotten": "7.7"
      },
      {
          "title": "Stand by Me",
          "image": "stand-by-me.jpg",
          "URLGoodreads": "11574.The_Body",
          "rateGoodreads": "4.26",
          "URLRotten": "/m/stand_by_me_1986",
          "rateRotten": "8"
      },
      {
          "title": "1984",
          "image": "1984.jpg",
          "URLGoodreads": "5470.1984",
          "rateGoodreads": "4.14",
          "URLRotten": "/m/1984_1984",
          "rateRotten": "6.7"
      },
      {
          "title": "Lord of the Flies",
          "image": "lord-of-the-flies.jpg",
          "URLGoodreads": "7624.Lord_of_the_Flies",
          "rateGoodreads": "3.64",
          "URLRotten": "/m/lord_of_the_flies_1963",
          "rateRotten": "8.3"
      },
      {
          "title": "Stalker",
          "image": "stalker.jpg",
          "URLGoodreads": "331256.Roadside_Picnic",
          "rateGoodreads": "4.21",
          "URLRotten": "/m/1043378_stalker",
          "rateRotten": "8.2"
      },
      {
          "title": "Childhood's End",
          "image": "childhoods-end.jpg",
          "URLGoodreads": "414999.Childhood_s_End",
          "rateGoodreads": "4.09",
          "URLRotten": "/tv/childhood_s_end/s01",
          "rateRotten": "6.7"
      },
      {
          "title": "World War Z",
          "image": "world-war-z.jpg",
          "URLGoodreads": "8908.World_War_Z",
          "rateGoodreads": "4.01",
          "URLRotten": "/m/world_war_z",
          "rateRotten": "6.2"
      },
      {
          "title": "Blade Runner",
          "image": "blade-runner.jpg",
          "URLGoodreads": "7082.Do_Androids_Dream_of_Electric_Sheep_",
          "rateGoodreads": "4.08",
          "URLRotten": "/m/blade_runner",
          "rateRotten": "8.5"
      },
      {
          "title": "The Firm",
          "image": "the-firm.jpg",
          "URLGoodreads": "5358.The_Firm",
          "rateGoodreads": "3.98",
          "URLRotten": "/m/1044522_firm",
          "rateRotten": "6.2"
      },
      {
          "title": "The Firm",
          "image": "the-firm.jpg",
          "URLGoodreads": "5358.The_Firm",
          "rateGoodreads": "3.98",
          "URLRotten": "/m/1044522_firm",
          "rateRotten": "6.2"
      },
      {
          "title": "Twilight",
          "image": "twilight.jpg",
          "URLGoodreads": "41865.Twilight",
          "rateGoodreads": "3.57",
          "URLRotten": "/m/twilight",
          "rateRotten": "5.4"
      },
      {
          "title": "The Da Vinci Code",
          "image": "the-da-vinci-code.jpg",
          "URLGoodreads": "968.The_Da_Vinci_Code",
          "rateGoodreads": "3.79",
          "URLRotten": "/m/da_vinci_code",
          "rateRotten": "4.8"
      },
      {
          "title": "Memoirs of Geisha",
          "image": "memoirs-of-geisha.jpg",
          "URLGoodreads": "930.Memoirs_of_a_Geisha",
          "rateGoodreads": "4.08",
          "URLRotten": "/m/memoirs_of_a_geisha",
          "rateRotten": "5.4"
      },
      {
          "title": "Pride and Prejudice",
          "image": "pride-and-prejudice.jpg",
          "URLGoodreads": "1885.Pride_and_Prejudice",
          "rateGoodreads": "4.24",
          "URLRotten": "/m/1153077_1153077_pride_and_prejudice",
          "rateRotten": "7.7"
      },
      {
          "title": "To Kill a Mockingbird",
          "image": "to-kill-a-mockingbird.jpg",
          "URLGoodreads": "2657.To_Kill_a_Mockingbird",
          "rateGoodreads": "4.25",
          "URLRotten": "/m/to_kill_a_mockingbird",
          "rateRotten": "8.8"
      },
      {
          "title": "The Twilight Saga: New Moon",
          "image": "new-moon.jpg",
          "URLGoodreads": "49041.New_Moon",
          "rateGoodreads": "3.52",
          "URLRotten": "/m/twilight_saga_new_moon",
          "rateRotten": "4.7"
      },
      {
          "title": "The Hunger Games",
          "image": "the-hunger-games.jpg",
          "URLGoodreads": "2767052-the-hunger-games",
          "rateGoodreads": "4.34",
          "URLRotten": "/m/the_hunger_games",
          "rateRotten": "7.2"
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
