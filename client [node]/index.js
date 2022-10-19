const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');

const link = prompt("Link from video: ")

const file = fs.createWriteStream("song.mp3");
const request = http.get(`http://server.winqdev.xyz/mp3?URL=${link}`, function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});
