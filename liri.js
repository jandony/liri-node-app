require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");


var userCommand = process.argv[2];
var userInput = process.argv.slice(3).join("+");

function concertThis() {
    // Bands in Town Artist Events API goes here:
    var queryUrl = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp";

    axios.get(queryUrl).then(function(response) {
        // if (err) return console.log(err);
        var moment = require("moment");

        console.log("------------");
        console.log("Venue: " + response.data[0].venue.name);
        console.log("Location: " + response.data[0].venue.city);
        console.log("Date of Event: " + moment(response.data[0].datetime).format("MM/DD/YYYY"));
        console.log("------------");
        // console.log(response.data);
    });
}

function spotifyThisSong(userInput) {

    var newCommand = userInput.split("+").join(" ");
    // console.log(newCommand);

    spotify.search({ type: 'track', query: newCommand}, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        if ("The Sign") {
            console.log("------------");
            console.log("Artist: " + response.tracks.items[5].artists[0].name);
            console.log("Song: " + response.tracks.items[5].name);
            console.log("URL: " + response.tracks.items[5].external_urls.spotify);
            console.log("Album: " + response.tracks.items[5].album.name);
            console.log("------------");
        } else if (userInput){
            console.log("------------");
            console.log("Artist: " + response.tracks.items[0].artists[0].name);
            console.log("Song: " + response.tracks.items[0].name);
            console.log("URL: " + response.tracks.items[0].external_urls.spotify);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log("------------");
        }
    });
}

function movieThis(userInput) {
    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(function(response) {
        if (userInput === "Mr. Nobody" || userInput === "Mr.+Nobody") {
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");
        } else {
            console.log("------------");
            console.log("Title: " + response.data.Title);
            console.log("Year: " + response.data.Year);
            console.log("IMDB Rating: " + response.data.Rated);
            console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            console.log("Country: " + response.data.Country);
            console.log("Language: " + response.data.Language);
            console.log("Plot: " + response.data.Plot);
            console.log("Actors: " + response.data.Actors);
            console.log("------------");
        }
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        var song = data.split(",");
        console.log(song[1]);
        spotifyThisSong(song[1]);
        
    }
)};

switch(userCommand) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        if (userInput) {
            spotifyThisSong(userInput);
        } else {
            spotifyThisSong("The Sign");
        }
        break;
    case "movie-this":
        if (userInput) {
            movieThis(userInput);
        } else {
            movieThis("Mr. Nobody")
        }
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        return console.log("Choose a valid command! Ex: concert-this, spotify-this-song, movie-this, or do-what-it-says");
}