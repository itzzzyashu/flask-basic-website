// Instafeed.js
var userFeed = new Instafeed({
  get: "user",
  target: "instafeed",
  // target: document.getElementById("instafeed"),
  resolution: "low_resolution",
  template: '<a href="{{link}}"> <img title="{{caption}}" src="{{image}}" /></a>',
  accessToken:
    "IGQVJXMW43QnhIN05jWGRMOUVVUHp6Y3g3TThqc0puLV9Ba0JRT24yS3RsOWJPdFZA3SF8wX0NYUERqUFVTQkUxUjRobkxxUzRSMlhWaUhzRDd5SS1DeTBacERzQjJ4X0ZAieWNIS3FXNzZAnOGZATOW1lVwZDZD",
});
userFeed.run();
