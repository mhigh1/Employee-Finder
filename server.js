// Dependencies
const express = require('express');
const path = require('path');

// Instatiate express instance
const app = express();

// Configure port
const PORT = 8080;

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
require('/routes/api-routes.js')(app);
require('/routes/html-routes.js')(app);

// Listeners
app.listen(PORT, function(){
    console.log(`Employee-Finder is now listening on PORT ${PORT}...`);
});