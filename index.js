const express = require('express')
var bodyParser = require('body-parser')
const app = express()
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.post('/sent-to-linenoti',(req,res,next) => {
    const payload = req.body
    console.log("payload : "+payload);

    res.send(payload);
})
app.listen(process.env.PORT || 3000,() => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})