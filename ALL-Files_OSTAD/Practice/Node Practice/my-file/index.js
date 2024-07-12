let fs = require('fs');
let http = require('http');


let server = http.createServer(function (req, res) {


    if (req.url='/'){
        // Asy
        // fs.readFile('home.html', function (error, data){
        //     res.writeHead(200, {'Content-Type': 'text/HTML'});
        //     res.write(data);
        //     res.end();
        // })


    //     sy

        let myData = fs.readFileSync('home.html');
        res.writeHead(200, {'Content-Type': 'text/HTML'});
        res.write(myData);
        res.end();
    }

});

server.listen(5050);
console.log("server started");