const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

router.get('/', (req, res) => {
    res.render('project');
});

module.exports = router;

//not certain I need this page. I created it 

//Watch video: Using Data and Route Parameters and also Modular Routes