// Instafeed.js
var userFeed = new Instafeed({
  get: "user",
  target: "instafeed",
  limit: 14,
  resolution: "low_resolution",
  template: '<a href="{{link}}"> <img title="{{caption}}" src="{{image}}" /></a>',
  accessToken: "IGQVJVV2tJOFlhQkc2MFoxU2hjTUMtRk9ZATGtuakJIYWt5ZA2lsWDlKdkRiSkpZAb2JZAal9FUnhBcWU5aG0tdmxZAYTlaZAXpXQ3U2WkR5bkIwUUVvNUpGTFM1X2xzU2VjWjBCODl4ZAkdkWWQ5b3ZACcUxwbQZDZD",
});
userFeed.run();
