
//Set up Express server
const express = require('express');//Set up Express server
const { projects } = require('./data.json');
const bodyParser = require('body-parser');
// const router = express.Router();
//Express app created
const app = express();

//Middleware to use static files like CSS...
app.use('/static', express.static('public'));

//Middleware: Allows me to use Pug to render templates/views.
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false}));

//Express will look for files with the Pug extension...
app.get('/', (req, res) => {//express knows to look for pug files b/c set to view engine, pug...
    res.locals.projects = projects;
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project', (req, res) => {
    res.locals.data.projects;
    res.render('project', `${projects}`);
});

// function errorMessage() {
//     app.use((req, res, next) => {
//         if (error === 404) {
//             app.get('/error', (req, res) => {
//                 res.render('error');
//                 console.log('404 - Page Not Found!');
//             });
//         } else if (error === 500) {
//             app.get('/error', (req, res) => {
//                 res.render('error');
//                 console.log('500 - Page does not exist');
//             });
//         }
//     });
// };

//set up routes
// const routes = require('./routes');

// app.use(routes);

// app.get('/', (req, res) => {
//     res.send('<h1>Welcome! This is Kennie Kincaid!</h1>');//pass in template
// });

app.use((req, res, next) => {
    const err = new Error('Oops! Page Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    // res.locals.error = err;
    err.status = err.status || 500;
    res.status(err.status);
    res.render('error', {error: err});
});

const port = 3000;
app.listen(port, () => console.log(`Kennie's fabulous app is listening on port ${port}!`));

// module.exports = router

// Server to repond to requests

// const routes = require('.routes');

// app.use(routes);