const express = require('express')
const app = express()

app.get('*', (req, res) => {
    let addr = req.connection.remoteAddress
    console.log('Received request from: ' + addr)
    res.send(addr)
})

app.listen(3000, () => console.log('IP Server Started.'))