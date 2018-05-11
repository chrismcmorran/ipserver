const express = require('express')
const app = express()

app.get('*', (req, res) => {
    let addr = req.connection.remoteAddress
    console.log('Received request from: ' + addr)
    res.send(addr)
})

app.listen(process.env.PORT, () => console.log('IP Server Started.'))