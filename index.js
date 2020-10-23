// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();


let apiRoutes = require("./api-routes");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://juninhoxp:juninho0@cluster0.gdxip.mongodb.net/TesteRaidHut', { useNewUrlParser: true});

var db = mongoose.connection;



if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected")


var port = process.env.PORT || 8080;


app.get('/', (req, res) => res.send('Server ON'));


app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});