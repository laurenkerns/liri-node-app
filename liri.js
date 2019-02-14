//read and set enviroment variables 
require("dotenv").config();

//variables
var keys = require("./keys");

var spotify = new Spotify(keys.spotify);



