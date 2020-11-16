var jimp = require('jimp');

var images = ['images/wallpaper.jpg', 'images/text.png'];

var jimps = [];

for (var i = 0; i < images.length; i++) {
    jimps.push(jimp.read(images[i]));
}

Promise.all(jimps).then(function(data) {
  return Promise.all(jimps);
}).then(function(data) {
  data[0].composite(data[0],0,0);
  data[0].composite(data[1],0,0);

    data[0].write('final-images/test.png', function() {
      console.log("wrote the image");
    });
});