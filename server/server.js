const path = require('path');
const express = require('express');

var app = express();
const publicPath = path.join(__dirname, '..', 'public');


app.use(express.static(publicPath));


app.listen(3000,()=>{
    console.log('Server is listening port 3000');
    
});