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

app.post('/sent-to-linenoti',async(req,res,next) => {
    const payload = req.body
    // console.log("payload : "+payload);
    // console.log("message : "+JSON.stringify(payload.message));
    data = { message: payload.notificationId +" : "+payload.detailedMessage.text}
    console.log("data : " , data);
    // const bodyFormData = new FormData();
    // bodyFormData.append('message',JSON.stringify(payload.detailedMessage.text));

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer gaMfaVoFk8TGDlxkmGoTiNI21JLXc5C1sN3ouAlux0n'
    }
  };

    const response = await axios.post('https://notify-api.line.me/api/notify', data ,config)
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