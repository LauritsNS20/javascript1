 

var myMovies = [
    {
        title: "Forest Gump",
        published: 1994,
        genres: ["drama"],
        actors: ["Tom Hanks", "Tom Hanks"],
    },
    {
        title: "John Wick",
        published: 2017,
        genres: ["action"],
        actors: ["keanu reeves", "Laurence Fishburne"],
    },
    {
        title: "Alien",
        published: 1979,
        genres: ["horror"],
        actors: ["Sigourney Weaver", "Bolaji Badejo"],
    },
    {
        title: "Lord of the rings",
        published: 2001,
        genres: ["fantasy"],
        actors: ["Elijah Wood", "Viggo Mortensen"],
    },
    {
        title: "batman dark knigth rises",
        published: 2012,
        genres: ["action"],
        actors: ["Christian Bale", "Joseph Gordon-Levitt"],
    },
    {
        title: "Guardians of the Galaxy 3",
        published: 2023,
        genres: ["action", "fantasy"],
        actors: ["Chris Pratt", "Will Poulter"],
    },
    {
        title: "Star Wars Episode I",
        published: 1999,
        genres: ["sci-fi", "action"],
        actors: ["Ewan McGregor", "Liam Neeson"],
    },
    {
        title: "The Matrix",
        published: 1999,
        genres: ["action", "sci-fi"],
        actors: ["Keanu Reeves", "Laurence Fishburne", "Hugo Weaving"],
    },
    {
        title: "Top Gun",
        published: 1986,
        genres: ["action", "romance"],
        actors: ["Val Kilmer", "Tom Cruise"],
    },
    {
        title: "Predator",
        published: 1987,
        genres: ["horror", "action"],
        actors: ["Arnold Schwarzenegger", "Kevin Peter Hall"],
    },
]

const FORM = document.querySelector(".searchForm")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()
    
   const RESULTS = myMovies.filter(function(element){
    return searchTitle(event.target.search.value, element.title)
      || compare(element.published, event.target.search.value)
      || compare(element.genres, event.target.search.value)
      || compare(element.actors, event.target.search.value)
   })

   console.log(RESULTS)
}

function searchTitle(keyword, title) {
  return title
    .toLowerCase()
    .includes(
    keyword.toLowerCase()
     )
} 
const compare = (a, b) => a == b

function searchGenres(keyword, genres) {
    return genres
    .toLowerCase()
    .includes(
     keyword.toLowerCase()
    )
}
const find = (a, b) => a == b

function searchActors(keyword, actors) {
    return actors
    .toLowerCase()
    .includes(
    keyword.toLowerCase()
    )
}
const lookfor = (a, b) => a == b