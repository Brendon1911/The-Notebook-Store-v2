// Requirements
const express = require('express');


const chalk = require('chalk');


const debug = require('debug')('app');


const morgan = require('morgan');


const path = require('path');


const port = process.env.PORT || 3000;

// Initialize app
const app = express();

// Use Morgan
app.use(morgan('tiny'));

// Use public files
app.use(express.static(path.join(__dirname, '/public')));

// Use Semantic UI CSS
app.use('/css', express.static(path.join(__dirname, '/semantic/dist/')));

// Use Semantic UI JS
app.use('/js', express.static(path.join(__dirname, '/semantic/dist/')));

// Use jQuery
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

// Set views directory
app.set('views', './src/views');

// Set view engine
app.set('view engine', 'ejs');

// Index route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'The Notebook Store'
  });
});

//
app.listen(port, (req, res) => {
  debug(`Server started on port ${chalk.green(port)}...`);
});
