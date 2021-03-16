const express = require('express');
const app = express();
const mongose = require('mongoose')

const User = require('./models/User')

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

mongose.connect('mongodb://localhost:27017/guiapics', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {

    })
    .catch((erro) => {
        console.log(erro);
    })

app.get('/', (req, res) => {
    res.json({ sucesso: true });
})

app.post('/api/user', (req, res) => {
    var usuario = req.body;
    try {
        var novoUser = new User(usuario);
        console.log(novoUser)
        novoUser.save();

        res.json(novoUser);

    } catch (error) {
        res.sendStatus(500)
    }

})

module.exports = app;

