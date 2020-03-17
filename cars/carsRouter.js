const express = require("express");

const db = require("../data/connection.js");

const router = express.Router();

router.get("/", (req, res) => {
    db('cars')
    .then(car => {
        if(car){
            res.status(200).json(car);
        } else{
            res.status(404).json({message: 'Cars not found'})
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "There was an error with the server"});
    })
})

router.get("/:id", (req, res) => {
    const {id} = req.params;
    db('cars').where({id}).first()
    .then(car => {
        if(car){
            res.status(200).json(car);
        } else{
            res.status(404).json({message: 'Car not found'});
        }
    })
    .catch(err => {
        res.status(500).json({errorMessage: "There was an error with the server"});
    })
})

router.post("/", (req, res)=> {
    db('cars').insert(req.body, "id")
    .then(ids => {
        db('cars').where({id: ids[0]})
        .then(newCar => {
            res.status(201).json(newCar);
        })
    })
    .catch(err => {
        res.status(500).json({errorMessage: "There was an error with the server"});
    })
})

module.exports = router;