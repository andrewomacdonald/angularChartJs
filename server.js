
var fs=require('fs');
var express=require('express');
var app=express();
var salesData;

fs.readFile("salesData.json", function(err, data) {
    salesData = JSON.parse(data.toString());
});

app.set('port', process.env.PORT || 3030)

app.get('/products', function(request, response) {
    response.json(salesData);
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/'))

var server=app.listen(app.get('port'), function() {
    console.log("We have started our server at", app.get('port'));
});
