# liri-node-app
Week-10 Homework 

## LiriBot:
LiriBot is a just like the iPhone's SIRI- but instead of using speech interpretation, LIRI is a language Interpretation and Recognition Interface. You can use your computer’s command like that will take in the outlines parameters and give you back real time data!

Liri uses three different APIs to generate the data from your request. These API’s are:
* Bands in Town
* Spotify
* OMBD


** We also will be using these packages. WIthout these packages the application will not run properly. In order to run this on your local computer you must install them.**
* Axios
* Moment 
* Node-Spotify-API
* DotEnv

_Liri Commands_
Liri will be able to perform 4 different commands + the parameter you give her. Here are the four commands she is able to run

1. “Concert-this” + band who has an upcoming show
  * Liri will then pull the following information on the upcoming concert: Venue, Location and Date
  * If this band does not have an upcoming show Liri will not be able to pull any data
  * If you do not provide a parameter after “concert-this” in the command line, Liri will return “no data on this Artist, please try again!

2. Spotify-this”
  * Liri will pull the following information on the song title: Artists, Songs name, Preview link of the song, Album that the song is from.
  1* If no Parameter is given to Liri after “spotify-this” she will default to finding information on “The Sign” by Ace of Base
  
3. “Movie this”
  * Liri will pull the following information about the movie you provide her: Title of movie, Year the movie was released, IMBD rating, Rotten Tomatoes rating, Country where the movie was produced, Language the movie is spoken in, plot and the actors in the movie
  * If no parameter is given after the “movie-this” command then Liri will default to “Mr. Nobody”
  
4. “Do-what-it-says”
  * For this command, Liri will be reading the random.text file provided. Within this file there is a command, as well as the parameter. For this assignment the parameters are “spotify-this-song”, I want it that way. So Liri will be pulling from the spotify API and will provide the user will information on “I want it that way”.


## Screenshots of commands 
![concert this](/downloads.concert this.PNG)
