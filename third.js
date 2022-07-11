const http = require('http');

const server = http.createServer((req,res) =>{

     res.end("priyansh")
 });

 server.listen(4800)