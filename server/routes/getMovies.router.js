const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET route for movie image, title, and description for home page
router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "movies"
    ORDER BY "movies".title;`;
    pool.query(queryString)
        .then((response) => {
            res.send(response.row);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
})

//GET route for movie name, genres, and description on details page
router.get('/details/:id', (req, res) => {
    const movieId = req.params.id;
    const queryString = `SELECT "geners".name, "movies".id, "movies".title,
    "movies".discription, "movies".poster FROM "movies"
    JOIN "movies_geners" ON "movies".id = "movies_geners".movies_id
    JOIN "genres" ON "movies_genres".genres_id = "genres".id
    WHERE "movies".id =${movieId};`;
    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
})

module.exports = router;