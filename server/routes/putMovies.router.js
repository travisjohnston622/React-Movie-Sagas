const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//PUT to edit description
router.put('/description/:id', (req, res) => {
    const movieId = req.params.id;
    const changeStatus = req.body.description;
    const queryString = `UPDATE "movies" SET "description" = '${changeStatus}'
WHERE "id" = $1;`;
    pool.query(queryString, [movieId])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});
//PUT to edit title
router.put('/title/:id', (req, res) => {
    const movieId = req.params.id;
    const changeStatus = req.body.title;
    const queryString = `UPDATE "movies" SET "title" = '${changeTitle}'
    WHERE "id" = $1;`;
    pool.query(queryString, [movieId])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

module.exports = router;