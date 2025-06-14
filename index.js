// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());



// mongoose.connect(process.env.MONGO_URI)
//     .then(() => console.log("MongoDB connected"))
//     .catch(err => console.error(err));


// app.use((req, res, next) => {
//     console.log(`Request URL: ${req.ip}`);
//     console.log(`Request URL: ${req.originalUrl}`);
//     next(); // Pass the request to the next middleware or route handler
// });


// app.use('/api/contacts', require('./routes/contacts'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const connect_to_db = require("./config/db.config.js");
const cors = require("cors");
const app = express();

// Connect to the database

// connect_to_db();
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));



// app.use(
//   cors({
//     origin: "*", // Allow specific origin
//     methods: ["GET", "POST", "PUT", "DELETE","PATCH"],
//     allowedHeaders: "*"
//   })
// );

app.use((req, res, next) => {
    console.log(`Request URL: ${req.ip}`);
    console.log(`Request URL: ${req.originalUrl}`);
    next(); // Pass the request to the next middleware or route handler
});

app.use('/', require('./routes/contacts'));



const port = process.env.PORT || 8443;
// const port = process.env.PORT || 8444;
app.listen(port, () => {
 console.log(`Server Running at http://localhost:${port}`);
});



// https.createServer(options, app).listen(port, "sascma.sters.in", () => {
//   console.log(`Server Running at https://sascma.sters.in:${port}`);
// });
