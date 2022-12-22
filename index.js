const express = require('express')
const bodyParser = require('body-parser');
var request = require('request');
const app = express()



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/sent-to-linenoti',(req,res,next) => {
    const payload = req.body
    console.log("payload", payload)
    console.log(JSON.stringify(payload.detailedMessage.text))
    console.log(JSON.stringify(payload.detailedMessage["text"]))
const response = request({
    method: 'POST',
    uri: 'https://notify-api.line.me/api/notify',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      'bearer': 'd8cFwcoMGf8Ym5GRQIwjLHojEVh9Powd91gkEGk0CvF'
    },
    form: {
      message: JSON.stringify(payload.detailedMessage.text)
    }
  }, (err, httpResponse, body) => {
    if(err){
      console.log(err);
    } else {
      res.json({
        httpResponse: httpResponse,
        body: body
      });
    }
  });
    res.send(response);
})
app.listen(process.env.PORT || 3000,() => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})