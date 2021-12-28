const express = require('express')
const app = express()
const PORT = process.env.PORT || 2015

// Home route
app.get('/', (req, res) =>{
    res.json('Hi there 👋')
})

// Cat route
app.get('/cat', (req, res) =>{
    res.json('I have a cat called Lucy 🐱')
})

// Dog route
app.get('/dog', (req, res) =>{
    res.json('I have a dog and he\'s a good boy 🐶')
})

// 404 route
app.get('/*', (req, res) =>{
    res.json('NOT FOUND 🙈')
})

// live server 🚀
app.listen(PORT, console.log(`Lice on http://localhost:${PORT}`))