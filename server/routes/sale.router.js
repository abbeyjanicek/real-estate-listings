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

router.get('/', function (req, res) {
    console.log('in GET route');
    const query = `SELECT * FROM "listings" WHERE "type" LIKE '%sale%';`;
    pool.query(query).then((results) => {
        console.log(results);
        res.send(results.rows); 
    }).catch((error) => {
        console.log('error making GET', error);
        res.sendStatus(500);  
    });
}) //end GET route

router.delete('/:id', function (req, res) {
    console.log('in DELETE route');
    const idOfPropertyToDelete = req.params.id;
    const query = 'DELETE FROM "listings" WHERE "id" = $1;';
    pool.query(query, [idOfPropertyToDelete]).then ((results) => {
        console.log('received DELETE req');
        res.send(results.rows);
        }).catch ((error) => {
            console.log('error in DELETE', error);
            res.sendStatus(500);
        });
})//end DELETE route



module.exports = router;