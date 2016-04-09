// Node Modules
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var recipesCtrl = require('./core/server/controllers/recipesCtrl.js')

// Node Server
var app = express();
var port = 9001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(express.static(__dirname + '/core/client'));

app.use(session({
	secret: "supercalifragilisticexpealidocious",
	saveUninitialized: false,
	resave: false
}))

var isAuthenticated = function(req, res, next) {
	if (req.session.user) {
		next();
	} else {
		return res.status(403).send('Please login first')
	}
}

// Endpoints
app.get('/api/recipes',recipesCtrl.index);			//getAllRecipes
app.get('/api/recipes/:id',recipesCtrl.show);		//getRecipeDetails
app.post('/api/recipes', recipesCtrl.create)		//updateRecipeDetails
app.put('/api/recipes/:id', recipesCtrl.update)		//addNewRecipe
app.delete('/api/recipes/:id', recipesCtrl.destroy)	//deleteRecipe

	//addUser
	//getUser

// app.post('api/login', userCtrl.login);
// app.get('api/coolDataStuffz', isAuthenticated, dataCtrl.getData)

// MongoDB
var mongoUri = 'mongodb://localhost:27017/node-auth';
mongoose.connect(mongoUri);

// Start Database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function() {
    console.log('connected to db at ' + mongoUri)
});

// Start Server
app.listen(port, function() {
    console.log('I\'m watching you... Always watching: ' + port);
});