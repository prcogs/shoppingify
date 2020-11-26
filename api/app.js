const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Thing = require('./models/thing');
const Useur = require('./models/useur')

const app = express();

mongoose.connect('mongodb+srv://precogs:aeqwLXTx5XzAsgZ@cluster0.fg3g6.mongodb.net/sample_restaurants?retryWrites=true&w=majority',
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

app.post('/api/useur', (req, res, next) => {
    const useur = new Useur(
        {
            pseudo : "precogs",
            pass : "precogs",
            token : "",
            history : {
                date : 01/01/20,
                completed : false,
                list : {
                    name : "list",
                    items : {
                        name : "Mozza",
                        number : 1,
                        check : false
                    }
                }
            }
        })

    useur.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.use((req, res, next) => {
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
})



module.exports = app;



