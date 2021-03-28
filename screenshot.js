var webshot = require("webshot");

webshot("https://youtube.com", "./exports/youtube.png", function (err) {
  if (!err) {
    console.info("Took");
  }
});
