"use strict";
const express = require("express");
const bodyParser = require("body-parser");
let router = require ("./router");
let cors = require('cors');
let port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.options('*', cors())


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});
