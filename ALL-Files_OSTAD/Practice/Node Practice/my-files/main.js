let http = require('http');
let URL = require('url');

let server = http.createServer(function (request, response) {

   // if (request.url=="/"){
   //     response.writeHead(200, {"Content-Type": "text/html"});
   //     response.write('<h1>This is Home Page</h1>')
   //     response.end();
   // } else if (request.url=="/about"){
   //     response.writeHead(200, {"Content-Type": "text/html"});
   //     response.write('<h1>This is about Page</h1>')
   //     response.end();
   // }else if (request.url=="/contact"){
   //     response.writeHead(200, {"Content-Type": "text/html"});
   //     response.write('<h1>This is contact Page</h1>')
   //     response.end();
   // }

    // let myURL = "http://rabbil.com/blog.html?year=2020&month=july";
    //
    // let myURLOBJ = URL.parse(myURL, true);
    //
    // let myHostName = myURLOBJ.host;
    // let myPathName = myURLOBJ.pathname;
    // let mySearchName = myURLOBJ.search;
    //
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.write(myHostName);
    // response.end();




});

server.listen(5050);
console.log("server run success");


