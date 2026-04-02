// if you want to create a node server use http module of node 

// http and https modules
// 1. protocols ==> rules ==> how to send data,  how to receive data, how to handle errors, how to handle errors, how to mange connections, etc.
// 2. http ==> hypertext transfer protocol
// 3. https ==> hypertext transfer secure protocol

// http and https modules are used to create web servers, make http requests, and handle http responses in node.js they provides a way to create and manage http servers and handle http requests and responses.

const http = require('http');

// create a route for homepage only
// req ==> send by users
// res ==> send by server
const server = http.createServer((req, res) => {
    res.end('Hello World');
})
   server.listen(3000, () => {
       console.log('server is listening on port 3000');
   })

   