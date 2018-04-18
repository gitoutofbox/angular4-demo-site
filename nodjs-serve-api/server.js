var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var fs          = require("fs");
var cors        = require('cors');

app.use(cors());
app.use(express.static('app'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies 

var base = "/app"

app.get('/newsList', function (req, res) {
    fs.readFile(__dirname + base +'/json/newsList.json',  "utf8", function(err, data) {
        res.end(data);
    })
  });
app.post('/saveNews', function (req, res) {
   fs.readFile( __dirname + base +  "/json/newsList.json", 'utf8', function (err, data) {
   		data = JSON.parse( data );
        var newNewsObj = {"headline": req.body.headline, "content":req.body.content};
        data.push(newNewsObj);

        fs.writeFile(__dirname + base +  "/json/newsList.json", JSON.stringify(data), function (err) {
        if (err) throw err;
        res.end( JSON.stringify({'status':'success', 'message':'News added', 'data':JSON.stringify(data)}));
        });   
   });
})
app.put('/saveNews/:id', function (req, res) {
    fs.readFile( __dirname + base +  "/json/newsList.json", 'utf8', function (err, data) {
        data = JSON.parse( data );

        data.forEach(function(eachData, i) {
                if(eachData.id == req.params.id) {
                    eachData.headline = req.body.headline;
                    eachData.content = req.body.content;
                }
        })

         fs.writeFile(__dirname + base +  "/json/newsList.json", JSON.stringify(data), function (err) {
         if (err) throw err;
            res.end( JSON.stringify({'status':'success', 'message':'News updated', 'data':JSON.stringify(data)}));
         });   
    });
 })

 app.delete('/deleteNews', function (req, res) {
    fs.readFile( __dirname + base +  "/json/newsList.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        var matchIndex = -1;
        data.forEach(function(eachData, i) {           
                if(eachData.id == req.body.id) {
                    matchIndex = i;
                    return;
                }
        });
        data.splice(matchIndex, 1);
        

         fs.writeFile(__dirname + base +  "/json/newsList.json", JSON.stringify(data), function (err) {
         if (err) throw err;
             res.end( JSON.stringify({'status':'success', 'message':'Record deleted successfully', 'data':JSON.stringify(data)}));
         });   
    });
 })

var server = app.listen('8081', function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
})