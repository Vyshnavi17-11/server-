var http = require('http');
var imp = require('./module');
http.createServer(function(req,res){
    res.writeHead(200,{"Content-text":"text/html"});
    res.write(imp.myLine());
    res.end();
}).listen(1500);