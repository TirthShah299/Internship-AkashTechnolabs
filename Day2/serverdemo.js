var http = require('http');

http.createServer(function(req,res){
    res.end("Welcome to Node JS")
}).listen(3000);

console.log("Server stareted at port 3000")