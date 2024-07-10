const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
});

app.get('/', (request,response) => {
    response.send("Welcome to my server");
})

app.post('/api/review', (request,response) => {
    const {name, message} = request.body;
    console.log(name, message);
    response.send("Review submitted successfully")
})


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {console.log("Connection Successful")})
.catch((error) => {console.log("Received an error")} );