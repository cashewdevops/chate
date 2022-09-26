const express = require('express')
const app = express()
const path = require('path');
const consign = require('consign');
const helmet = require("helmet");
const session = require('express-session')

// set the view engine to ejs
app.set('views', './views/pages')
app.set('view engine', 'ejs');

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));


// Helmet
app.use(helmet());
app.disable('x-powered-by');

//configuring static files
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

consign()
    .include('./routes')
    // .include('./src/config/db.js')
    .into(app)

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
