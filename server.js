const express = require('express');
const drinks = require('./models/drinks')

const app = express();
const port = 3000;
//Routes
app.get('/drinks/', (req, res) => {
    res.render('drinks_index.ejs', {drink: drinks});
})


app.get('/drinks/', (req, res) => {
    res.render('drinks_index.ejs', {drink: drinks})
})


app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('show.ejs',{
        drink: drinks[req.params.indexOfDrinksArray]
    })
})

app.listen(port, () => {
    console.log(`listening on `, port)
})