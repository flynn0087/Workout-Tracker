//dependencies needed 
const router = require("express").Router();
const path = require("path");

//routes to the various html pages
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});
  
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/stats.html"));
});
  
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/exercise.html"));
});

//exportation to make usable by other files
module.exports = router;