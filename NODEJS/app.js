
const datetime = require("./date.js");
const http =require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'content-text':'text/html'});
    res.end( );
}).listen(8080);