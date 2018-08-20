//variables
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5002;
const bodyParser = require ('body-parser');
const homeRouter = require('./routes/home.router.js');
const rentalsRouter = require('./routes/rentals.router.js');
const saleRouter = require('./routes/sale.router.js');

//configure body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//set-up routes
app.use('/home', homeRouter);
app.use('/rentals', rentalsRouter);
app.use('/sale', saleRouter);

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('server running on port', PORT);
    
});