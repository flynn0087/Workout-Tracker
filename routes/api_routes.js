const router = require("express").Router();
const db = require("../models");

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then((workout) => {
            res.status(201).json(workout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});


module.exports = router;