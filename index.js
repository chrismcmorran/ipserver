const express = require('express')
const app = express()

app.get('*', (req, res) => {
    let addr = req.headers['x-forwarded-for'] || req.connection.remoteAddress.replace(/^.*:/, '')
    console.log('Received request from: ' + addr)
    res.send(addr)
})

app.listen(process.env.PORT, () => console.log('IP Server Started.'))