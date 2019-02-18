//read and set enviroment variables 
require("dotenv").config();

//import keys document
var keys = require("./keys");

// built in package
var axios = require("axios");

//npm packages
var Spotify = require("node-spotify-api");
var moment = require("moment");
//moment format


//enable spotify key and assign to variable 
var spotify = new Spotify(keys.spotify);

//fs package to read and write
var fs = require("fs");


//what the command the user wants Liri to process
var LiriCommand = process.argv[2];
 //what the input after the command the user wants Liri to process
var LiriInput = process.argv[3];

//external packages
var OmbdURL = "http://www.omdbapi.com/?t=" + LiriInput + "&y=&plot=short&apikey=trilogy";
var bandsInTownURL = "https://rest.bandsintown.com/artists/" + LiriInput + "/events?app_id=codingbootcamp"


///////////////////LiriCommands///////////////////
Userinputs(LiriCommand, LiriInput);

function Userinputs (LiriCommand, LiriInput){
    switch (LiriCommand) {
        // concert-this
            case "concert-this":
              concertThis(LiriInput);
              break;
        // spotify-this   
            case "spotify-this":
              spotifyThis(LiriInput);
              break;
        //movie-this   
            case "movie-this":
              movieThis(LiriInput);
              break;
        //do-what-it-says
            case "do-what-it-says":
            doWhatItSays(LiriInput);
            break;
        //default
            default:
            console.log("somethings not right");
            break;
        }
};


//concert-this
    function concertThis(){
        axios.get(bandsInTownURL).then(
            function(response){
                if(LiriInput === undefined){
                    console.log("No data on this Artist, please try again");
                } 
                    // console.log(response.data);
                    console.log("Venue: " + response.data[0].venue.name);
                    console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region);
                    var concertDate = (response.data[0].datetime);
                    var convertedDate = moment(concertDate);
                    console.log("Date: " + convertedDate.format("MM/DD/YYYY"));
            }
        );

    }

//spotify-this
    function spotifyThis(){
        // console.log('spotify this called!!!!!!!!!!!')
        if(LiriInput === undefined){
            LiriInput = "The Sign Ace of Base";  /////if the under doesn't do anything
        }
        // console.log(songName)
        spotify.search(
            {type: "track", 
            query: LiriInput 
            },
            function(err, data){
                if (err) {
                    return console.log("Error Occurred: ", err);
                }
                var song = data.tracks.items;
                console.log("Artist: " + song[0].artists[0].name);
                console.log("Song Title: " + song[0].name);
                console.log("Listen Now: " + song[0].preview_url);
                console.log("Album this song is from: " + song[0].album.name);

            }
        );
    }

//movie-this
    function movieThis(){
        if(LiriInput === undefined){
            LiriInput = "Mr Nobody";   /////If user does not input anything
            // console.log("If you haven't watched Mr. Nobody, then you should: http://www.imdb.com/title/tt0485947/");
            // console.log("It's on Netflix");
        }
        // console.log(OmbdURL);
        axios.get(OmbdURL).then(        
            function(response) {
                console.log("Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("IMBD Rating: " + response.data.dataimbdRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
                console.log("Produced in: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
            }
        );
    }
    
    
//do-what-it-says
    function doWhatItSays(){
        //store contents of txt file in data
       const data = fs.readFileSync("random.txt", "utf8")
            console.log(data);
            var dataArr = data.split(", ");
            // const song = dataArr[1]
            // console.log('data arr!!!!!!!!' , dataArr);
            // console.log('data arr 1 ', dataArr[1])
            console.log(data[0], data[1])
            spotifyThis(data[0], data[1]);
    
    
    }

