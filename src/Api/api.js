var express = require('express');  
const cors=require("cors");

var app = express();  

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration



app.get('/:icao', function (req, res) {  
    // console.log(req.params.icao);
    let url = "https://metar.vatsim.net/metar.php?id=" + req.params.icao; 
    fetch(url)
    .then(response => response.text())
    .then(data =>res.send(data))


});  

var server = app.listen(8000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  