var http = require('http');
var url = require('url');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/htm'});
    //res.write('Hello!');
    //res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
