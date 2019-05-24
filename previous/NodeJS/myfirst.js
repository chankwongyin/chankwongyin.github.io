//To include a module, use the require() function
//with the name of the module
var http = require('http');
//use ./ to locate the module,
//that means that the module is located in the same folder
var dt = require('./myfirstmodule');





// has access to the HTTP module,
//and is able to create a server:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.end('Hello World!!!');
}).listen(8080);
