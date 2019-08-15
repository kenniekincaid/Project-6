/**REQUIRED: SERVER, DATA, PARSER, & APP */
    const express = require('express');
    const { projects } = require('./data.json');
    const bodyParser = require('body-parser');
    const app = express();

/**MIDDLEWARE SECTION: Static files and pug to render templates/views*/
    app.use('/static', express.static('public'));
    app.set('view engine', 'pug');
    app.use(bodyParser.urlencoded({ extended: false }));

/**ROUTES: Express will look for files with the pug ext b/c set to view engine.*/
    app.get('/', (req, res) => {
        res.locals.projects = projects;
        res.render('index');
    });
    app.get('/about', (req, res) => {
        res.render('about');
    });
    app.get('/project/:id', (req, res) => {
        res.locals.project = projects[req.params.id - 1];
        res.render('project');
    });

/**ERROR HANDLERS...*/
    app.use((req, res, next) => {
        const err = new Error('Oops! Page Not Found');
        err.status = 404;
        next(err);
    });
    app.use((err, req, res, next) => {
        err.status = err.status || 500;
        console.log('Internal Server Error');
        res.status(err.status);
        res.render('error', {error: err});
    });

/**LISTENER...*/
    const port = 3000;
    app.listen(port, () => console.log(`Kennie's fabulous app is listening on port ${port}!`));