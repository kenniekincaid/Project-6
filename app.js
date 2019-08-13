const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));

app.set('view engine', 'pug');

const routes = require('.routes');

app.use(routes);

app.use((req, res, next) => {
    console.log("Hello");
    const err = new Error('404 Page Not Found');
    err.status = 404;
    next(err);
});

app.use((req, res, next) => {
    const err = new Error('Oops! Page Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(port, () => console.log(`App is listening on port ${port}!`))



