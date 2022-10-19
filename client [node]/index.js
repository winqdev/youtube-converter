//Make sure you put link from your website at line 8
const http = require('http');
const fs = require('fs');

const link = prompt("Link from video: ")

const file = fs.createWriteStream("song.mp3");
const request = http.get(`http://example.com/mp3?URL=${link}`, function(response) {
   response.pipe(file);
   
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});
