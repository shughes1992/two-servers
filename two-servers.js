var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;


//first server request

function handleRequest1(request, response) {

    response.end("You are AMAZING!!" + request.url)
}

//second server request

function handleRequest2(request, response) {

    response.end("You are not so amazing ... sorry." + request.url)
}

//first server created

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
  });

//second server created

  var server2 = http.createServer(handleRequest2);


server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });
  