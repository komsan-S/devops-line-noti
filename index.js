const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express()



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

app.post('/sent-to-linenoti',(req,res,next) => {
    const payload = req.body
    console.log("payload : "+payload);

    
const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer d8cFwcoMGf8Ym5GRQIwjLHojEVh9Powd91gkEGk0CvF'
    }
  };

    const response = axios.post('https://notify-api.line.me/api/notify', payload)
  .then(response => {
    // console.log(response.data);
    return response.data
  })
  .catch(error => {
    // console.log(error);
    return error
  });
    res.send(response);
})
app.listen(process.env.PORT || 3000,() => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`)
})