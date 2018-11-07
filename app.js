const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const errorHandler = require('errorhandler');

//Initiate our app
const app = express();

//Configure our app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use(errorHandler());

require('./models/users');
require('./config/passport');
app.use(require('./routes'));


app.get('/', (req, res, next) => {
    res.send('Hello World!');
})


//Configure Mongoose
mongoose.connect('mongodb://localhost/passport-tutorial', { useNewUrlParser: true });
mongoose.set('debug', true);

//Error handlers & middlewares
app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
        errors: {
            message: err.message,
            error: err,
        },
    });
});

app.listen(8000, () => console.log('Server running on http://localhost:8000/'));
