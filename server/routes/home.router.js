const express = require('express');
const router = express.Router();

//pg setup
const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'real-estate',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 10000
}

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('postgresql connected!');
});

pool.on('error', (error) => {
    console.log('error connecting to db', error);
});

//POST req to db with new property info to add
router.post('/', function (req, res) {
    const propertyToAdd = req.body; //data we are sending
    console.log('in POST route', propertyToAdd);
    const query = 'INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path") VALUES ($1, $2, $3, $4, $5);';
    pool.query(query, [propertyToAdd.cost, propertyToAdd.sqft, propertyToAdd.type, propertyToAdd.city, propertyToAdd.imagepath]).then(() => {
        console.log('POST - added to db');
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error in POST', error);
        res.sendStatus(500);
    });
});//end POST to db

router.get('/', function (req, res) {
    console.log('in GET route');
    const query = 'SELECT * FROM "listings";';
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows); 
    }).catch((error) => {
        console.log('error making GET', error);
        res.sendStatus(500);  
    });
}) //end GET route

module.exports = router;