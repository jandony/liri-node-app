# liri-node-app

## What is Liri Node App?
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

To retrieve the data that will power this app, the user will send requests _("search")_ using the axios package to the Bands in Town, Spotify and OMDB APIs.

## Overview of the App
* Required all Node Package Installations
* Created 2 user input variables (one for the command type and one for the user text input)
* Declared functions for each user command type (concert-this, spotify-this-song, movie-this, and do-what-it-says)
* When user types a command type without any input, the user inputs will default to the developer's default inputs.

## Instructions
1. Begin by downloading all files inside the repository
2. Open terminal or bash window
3. Navigate into the repo folder
4. Start by typing "node liri.js" then add a command type followed by an input
    - Command Example 1: _node liri.js concert-this Maroon 5_
    - Command Example 2: _node liri.js spotify-this-song Lose Yourself_
    - Command Example 3: _node liri.js movie-this The Avengers_
    - Command Example 4: _node liri.js do-what-it-says_


## Command Example Screenshots
![Image of Example 1](https://github.com/jandony/liri-node-app/blob/master/Command%20Images/concert-this-screenshot.png)
![Image of Example 2](https://github.com/jandony/liri-node-app/blob/master/Command%20Images/spotify-this-song-screenshot.png)
![Image of Example 3](https://github.com/jandony/liri-node-app/blob/master/Command%20Images/movie-this-screenshot.png)
![Image of Example 4](https://github.com/jandony/liri-node-app/blob/master/Command%20Images/do-what-it-says-screenshot.png)

## Technologies Used in App
* Axios NPM Package -> Promise based HTTP client for the browser and node.js
* Inquirer NPM Package -> A collection of common interactive command line user interfaces
* Moment -> A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates
* DotEnv -> Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env
* Node-Spotify-API -> A simple to use API library for the Spotify REST API
* OMDb API -> A RESTful web service to obtain movie information, all content and images on the site
* Bands In Town API -> Displays read-only access to artist info and artist events

_Total APIs: 3_

## Creator's Role in the App Development
Back End Developer for the app


<!-- 
1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
2. Give a high-level overview of how the app is organized
3. Give start-to-finish instructions on how to run the app
4. Include screenshots, gifs or videos of the app functioning
5. Contain a link to a deployed version of the app
6. Clearly list the technologies used in the app
7. State your role in the app development
 -->