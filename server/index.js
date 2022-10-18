const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const contentDisposition = require('content-disposition')
//Fill all
const port = 8080 //If you want change it, Make sure its number, not string
const errorweb = "url" //404 Webpage
      
app.use(cors());

app.listen(port, () => {
    console.log("Ready!")
});
//Route for MP3 downloading
app.get('/mp3', (req,res) => {
    
var URL = req.query.URL; // example.com/mp3?URL=<youtube link>
var validator = ytdl.validateURL(URL) //Validator for link
var URL2 = " " //Leave this blank! is used for swapping correct link

if(validator == false) {
    function retry() {
    res.redirect(errorweb)
      //If validator returns false then redirecting to 404 webpage
    }
} else {
    URL2 = URL //The swapping
    validatedone() //Calling function to download music
}
    
    if(validator == false) {
      //Validator for video title
        retry()
    } else {
        (async function() {
    var songtitle = await ytdl.getInfo(URL2)   
        res.set({
            'Content-Disposition': 'attachment; filename=' + songtitle.videoDetails.title + '.mp3'
            //Downloading audio with his name
        });
})();
        
    }
    //The downloader
    function validatedone() {
ytdl(URL2, {
    quality: 'highestaudio',
    format: 'mp3',
    filter: 'audioonly'
    }).pipe(res)
}
})
//Route for MP3 downloading
app.get('/mp4', (req,res) => {
  
var URL3 = req.query.URL3; // example.com/mp4?URL3=<youtube link>
var validatorr = ytdl.validateURL(URL3) //Validator for link
var URL4 = " " //Leave this blank! is used for swapping correct link

if(validatorr == false) {
    function retry() {
    res.redirect(errorweb)
      //If validator returns false then redirecting to 404 webpage
    }
} else {
    URL4 = URL3 //The swapping
    validatedonee() //Calling function to download video
}
    
    if(validatorr == false) {
        retry()
      //Validator for video title
    } else {
        (async function() {
    var songtitle = await ytdl.getInfo(URL3)
    console.log(songtitle.videoDetails.title) //Remove if you want
        res.set({
            'Content-Disposition': 'attachment; filename=' + songtitle.videoDetails.title + '.mp4'
          //Download video with his name
        });
})();
        
    }
    //The downloader
    function validatedonee() {
ytdl(URL3, {
    quality: 'highestvideo',
    format: 'mp4',
    filter: 'videoandaudio'
    }).pipe(res)
}
})
