const express = require('express')

const app = express()
PORT = 3000


app.get('/', (req, res) => {
    res.send('<h1> hello world </h1>')
    console.log('GET req at /')
})


app.get('/whoami', (req, res) => {
    res.send('Hugh')
    console.log('GET request at /whoami');
})


app.listen(PORT, () => {
    console.log(`Server running on port number: ${PORT}`)
})