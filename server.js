//these are the dependencies needed
const express = require("express");
const mongoose = require("mongoose");
//require('dotenv/config');

//this sets the port when 
const PORT = process.env.PORT || 3000;

//this section creates the instance of express and accesses the static public files
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//this section connects to the routes created
app.use(require("./routes/html_routes.js"));
app.use(require("./routes/api_routes.js"));

//this section connects to the mongoose database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

//this starts the server listening
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });