const { log } = require('console');
const express = require('express');
const https = require('https');

const app = express();

app.get('/',function(request,response){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=52b8a0cd6d0c7ba3c848fca46c27c2ef&units=metric';
    https.get(url);

    https.get(url,function(res){
        console.log(res.statusCode);

        res.on('data',function(data){
            const weahterData = JSON.parse(data);
            const temp = weahterData.main.temp;
            const feels = weahterData.weather[0].description;
            const icons = weahterData.weather[0].icon;

            const iconurl = "http://openweathermap.org/img/wn/"+icons+"@2x.png";
            
            response.write("<img src="+iconurl+">");

            response.send();
        })
    })
})



app.listen(3000,function(){
    console.log('Started running server port on 3000');
})
