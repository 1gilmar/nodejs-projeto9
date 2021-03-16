const express = require('express');
const app = express();
const mongose = require('mongoose')

app.use(express.urlencoded({extended: false }))
app.use(express.json());

mongose.connect('mongodb://localhost:27017/guiapics', {useNewUrlParser: true, useUnifiedTopology: true})

app.get('/',(req, res)=>{
    res.json({sucesso: true});
})

module.exports = app;

