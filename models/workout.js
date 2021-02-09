//dependencies for the models
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this section creates the structure of the table for mongoose
const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            enum: ["Resistance", "Cardio"],
            required: "Must be either 'Resistance' or 'Cardio'"
        },
        name: {
            type: String,
            trim: true, 
            required: "Enter an excercise name"
        },
        duration: {
            type: Number,
            required: "Enter an excercize duration in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});    

const Workout = mongoose.model("Workout", workoutSchema);
//this exports it to the greater models file for exportation
module.exports = Workout;