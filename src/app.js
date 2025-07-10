const express = require('express');
const handlebars = require('express-handlebars');
const Path = require('path');

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', Path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, '..', 'public')));



const viewsRouter = require('./routes/views.router');
app.use('/', viewsRouter); 


  
module.exports = app;