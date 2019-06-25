require("dotenv").config();
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var fs = require("fs");


var userCommand = process.argv[2];

function concertThis() {
    // Bands in Town Artist Events API goes here:
    var artist = process.argv.slice(3).join("");
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

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

function spotifyThisSong() {
    var song = process.argv.slice(3).join("");

    spotify.search({ type: 'track', query: song}, function (err, response) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("------------");
        console.log("Artist: " + response.tracks.items[0].artists[0].name);
        console.log("Song: " + response.tracks.items[0].name);
        console.log("URL: " + response.tracks.items[0].external_urls.spotify);
        console.log("Album: " + response.tracks.items[0].album.name);
        console.log("------------");
    });
}

function movieThis() {
    var movie = process.argv.slice(3).join("+");

    // Then run a request with axios to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(queryUrl).then(function(response) {
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
    });
}

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        var song = data.split(",");
        console.log(song[1]);
        
    }
)};

switch(userCommand) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        return console.log("Choose a valid command! Ex: concert-this, spotify-this-song, movie-this, or do-what-it-says");
}