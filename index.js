const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.post('/sent-to-linenoti',(req,res,next) => {
    const payload = req.body
    console.log(payload);

    res.send(200);
})
app.listen(process.env.PORT || 3000,() => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})