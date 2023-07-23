// Create web server

const express = require('express');
const app = express();

// Set port
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set static folder
app.use(express.static(__dirname + '/public'));

// Get index page
app.get('/', (req, res) => {
    res.render('index');
});

// Listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
