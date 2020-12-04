const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const itemRoutes = require('./routes/item')
const categoryRoutes = require('./routes/category')
const histroryListRoutes = require('./routes/historyList')
const userRoutes = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://precogs:aeqwLXTx5XzAsgZ@cluster0.fg3g6.mongodb.net/shoppingify?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() =>  { console.log('Connexion à MongoDB réussie !')})
  .catch((err) => console.error(err, 'Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(bodyParser.json()); 


app.use('/api/item', itemRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/history-list', histroryListRoutes)
app.use('/api/auth', userRoutes)


module.exports = app;



