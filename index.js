const express = require('express')
const app = express()

app.get('/', (req, res) => res.send(req.connection.remoteAddress))

app.listen(3000, () => console.log('IP Server Started.'))