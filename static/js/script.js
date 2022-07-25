const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/harryKitty',
    { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connction error: '));
// db.once('open', function(){
//     console.log('[NodeJs(backend) - Mongoose(connecter) - MongoDB(database)] Connection Successful !')
// })

const kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greeting = "My name is " + this.name
    console.log(greeting)
}

var Kitten = mongoose.model('Kitten', kittySchema);

var harryKitty = new Kitten({ name: "Itzzzyashu" });
// console.log(harryKitty.name);
// harryKitty.speak();


harryKitty.save(function (err, harryKitty) {
    if (err) return console.log(err);
    harryKitty.speak();
})

Kitten.find({ name: "Itzzzyashu" }, function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens)
})
