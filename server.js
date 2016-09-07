var path = require('path');
var swapi = require('swapi-node');
var express = require('express');

var app = express();

var staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});
app.post("/pagenate",function(req , res)
 {
	 console.log("paginate");

swapi.get('http://swapi.co/api/people/').then(function (result) {
    //console.log(result.results.length);
	console.log(result)
    return result.nextPage();
}).then(function (result) {
    //console.log(result);
    return result.previousPage();
}).then(function (result) {
	
    //console.log(result);
}).catch(function (err) {
    //console.log(err);
});
 });
 app.post("/peoples",function(req , res)
 {
	 console.log("paginate");

swapi.get('http://swapi.co/api/people/').then(function (result) {
    //console.log(result.results.length);
	console.log(result)
    return result.nextPage();
}).then(function (result) {
    //console.log(result);
    return result.previousPage();
}).then(function (result) {
	
    //console.log(result);
}).catch(function (err) {
    //console.log(err);
});
 });
 app.post("/planets",function(req , res)
 {
	 console.log("paginate");

swapi.get('http://swapi.co/api/planets/').then(function (result) {
    //console.log(result.results.length);
	console.log(result)
    return result.nextPage();
}).then(function (result) {
    //console.log(result);
    return result.previousPage();
}).then(function (result) {
	
    //console.log(result);
}).catch(function (err) {
    //console.log(err);
});
 });
 app.post("/vehicles",function(req , res)
 {
 swapi.get('http://swapi.co/api/vehicles/').then(function (result) {
    //console.log(result.results.length);
	console.log(result)
    return result.nextPage();
}).then(function (result) {
    //console.log(result);
    return result.previousPage();
}).then(function (result) {
	
    //console.log(result);
}).catch(function (err) {
    //console.log(err);
});
 });
 app.get("/",function(req , res)
 {
  var html = '<form action="/peoples" method="post">' +
               '<button type="submit">Go Paginate</button>' +
            '</form>'+'<form action="/planets" method="post">' +
               '<button type="submit">Go Paginate</button>' +
            '</form>'+'<form action="/vehicles" method="post">' +
               '<button type="submit">Go Paginate</button>' +
            '</form>';
               
  res.send(html);
	 
	 console.log("hai");
 });