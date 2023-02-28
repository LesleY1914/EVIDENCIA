const datetime = require("./date.js");
const http =require("http");

http.createServer(function(req, res){
    res.writeHead(200, {'content-type':'text/html'});
    res.end('Date Time node.js');
}).listen(8080);

const datetime = require("./date.js");

console.log(datetime.myDateTime());