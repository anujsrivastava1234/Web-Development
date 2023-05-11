const express = require('express');

const app = express();

app.get('/',function(request,response){
    response.send('<h1>Hello, World!</h1>');
    console.log(request);
})
app.get('/contacts',function(request,response){
    response.send('Please contact me at anujsrivastava1596@gmail.com');
})
app.get('/about',function(request,response){
    response.send('I am anuj srivastava.');
})
app.get('/home',function(request,response){
    response.send('This is the home directory');
    console.log(request);
})
app.get('/hobbies',function(request,response){
    response.send('<ul><li>Reading</li><li>Music</li><li>Drinking</li></ul>')
})
app.listen(3000,function(){
    console.log('Server started on port 3000');
})