const express = require('express');
const drinks = require('./models/drinks')
const food = require('./models/food')

const app = express();
const port = 3000;
//Routes
app.get('/drinks/', (req, res) => {
    res.render('index.ejs', {drink: drinks, food: food});
})

app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('show.ejs',{
        drink: drinks[req.params.indexOfDrinksArray]
    })
})

app.get('/food/:id', (req, res) => {
    res.render('showFood.ejs', {
        food: food[req.params.id]
    })
})

app.listen(port, () => {
    console.log(`listening on `, port)
})