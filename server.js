//const http  = require('http');
const url   = require('url');
//const fs    = require('fs');
/* web server application needs to create a web server object 
    the function passed into the createServer is called
    once for every HTTP request made to the server, hence
    is called the request handler
const server = http.createServer((request, response)=>{

});
*/
/*
const server = http.createServer();
server.on('request', (request, response)=>{
    console.log(`New Connection!`)
    console.log(request.url);
    console.log(request.headers['user-agent']);
    response.writeHead(200, {'Content-Type': 'text/htm'});
    //res.write('Hello!');
    //res.write(req.url);
    var q = url.parse(request.url, true).query;
    var txt = q.year + " " + q.month;
    response.end(txt);


});

server.listen(8080);
*/
/* the Server object returned by createServer is an EventEmitter 
When the HTTP request hits the server, node calls the request handler
with a couple of handy objects for dealing with the transaction,
request and response.

The request object is an instance of IncomingMessage.

the request has quite a few interesting parts to it, you can check
the full object by console logging the request.
most interesting are:
the request.method i.e GET/POST
            url which contrary to what I thought will only return from the / onwards
            headers and from that the user agent (headers['user-agent']);

something to note: the header will be turned to lower case regardeless of how
the client sends it.

raw headers is also available


Request Body

When receiving a POT or PUT request, the request body may be required.
getting to the body data is a bit more involved than accessing the headers.
the request object that is passed to the handler implements the 
ReadableStream interface. the stream can be listened to or piped elsewhere.
we can grab the data by listening to the strea's 'data' and 'end' events.

The chunk emitted in each 'data' event is a Buffer.
if you know that the data is a string then the best thing to do is to
collect the data in an array and then when the 'end' event comes concatenate 
and stringify it.
example:

let body = [];
request.on('data', (chunk)=>{
    body.push(chunk);
}).on('end', ()=>{
    body = Buffer.concat(body).toString();
    // at this point, 'body' has the entire request body stored in it as a string
});


*/

/*
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/htm'});
    //res.write('Hello!');
    //res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
*/

//const server = http.createServer();

//server.on('request', (req, res)=>{
    //render('./public/index.html', res);
//});

//server.listen(8080);
/*
http.createServer((req, res)=>{
    fs.readFile('./public/index.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/htm'});
        res.write(data);
        res.end();
    });
    //rendera('./public/index.html', res);
}).listen(8080);
*/

function render(filePath, res){
    fs.readFile(filePath, (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/htm'});
        res.write(data);
        res.end();
    });
    
}


var http = require('http');
var fs = require('fs');
http.createServer((req, res)=> {
  fs.readFile('./public/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
    });
    
}).listen(8080);


//https://www.w3schools.com/nodejs/nodejs_filesystem.asp