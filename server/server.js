const express = require('express');
const controller = require('./controllers/controllers_controller');
const bodyParser = require('body-parser');


const port = 4008;

const app = express()

app.use(bodyParser.json())

app.get('/api/get-text', controller.getText)

app.post('/api/get-text', controller.postText)

app.put('/api/get-text/:id', 
controller.edit)

app.delete('/api/get-text/:id', 
controller.delete)





app.listen(port, () => {
    console.log('Steven we have lift off', port)
})