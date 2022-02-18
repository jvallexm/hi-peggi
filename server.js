const express    = require("express");
const path       = require("path");
const env        = require('dotenv').config();
const port       = process.env.PORT || 8080; // Initialize the port
const app        = express();                // Initializes express


app.use("/", express.static('./public')); // Expresses the public file as static

app.listen(port, ()=> console.log(`listening on port ${port}`)); // I hear you, dog