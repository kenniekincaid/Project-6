import { isModuleDeclaration } from "babel-types";
const express = require('express');
const router = express.Router();

router.get('/cards', (req, res) => { // modify fo my use.
    res.render('card', {prompt: "Who is buried in Grant's tomb?"});
});

//Create a route...
app.get('/', (req, res) => res.render('index'));

module.exports = router;