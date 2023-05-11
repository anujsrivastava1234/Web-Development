const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// app.get('/',function(request,response){
//     // response.send('<h1>Hello, World</h1>');
//     response.sendFile(__dirname+'/index.html');
// })

// app.post('/',function(request,response){
//     var num1= Number(request.body.num1);
//     var num2 = Number(request.body.num2);

//     var result = num1 + num2;

//     response.send("The result of "+num1+" and "+num2+" : "+result);
//     // response.send('Thanks for posting that!!');
// })

app.get('/bmiCalculator',function(request,response){
    response.sendFile(__dirname+'/bmiCalculator.html');
});

app.post('/bmiCalculator',function(request,response){

    var height1 = parseFloat(request.body.height);
    var weight11 = parseFloat(request.body.weight);

    var bmiCalculator = weight11/(height1*height1);

    response.send('YOur BMI is '+ bmiCalculator);
})

app.listen(3000,function(){
    console.log('Server started running on port 3000');
})