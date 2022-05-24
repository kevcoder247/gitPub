const express = require('express');
const drinks = require('./models/drinks')

const app = express();
const port = 3000;

//Index
app.get('/', (req, res) => {
    res.render('drinks_index.ejs')
})

app.get('/drinks/:indexOfDrinksArray', (req, res) => {
    res.render('show.ejs',{
        drink: drinks[req.params.indexOfDrinksArray]
    })
})

app.listen(port, () => {
    console.log(`listening on `, port)
})