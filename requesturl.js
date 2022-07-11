const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.url , req.headers , req.method)

    if(req.url == "/home")
    {

    // res.setHeader('Content-Type' ,'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>  Hello My First Nodejs Server!</h1> <br> <p>this is to tell someone <p></body>');
    // res.write('</html>')
    // res.end();
    res.setHeader('Content-Type' ,'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>  Welcome Home!</h1> <br> <p>this is to tell someone <p></body>');
    res.write('</html>')
    res.end();
    }
    if(req.url == "/about")
    {

    // res.setHeader('Content-Type' ,'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>  Hello My First Nodejs Server!</h1> <br> <p>this is to tell someone <p></body>');
    // res.write('</html>')
    // res.end();
    res.setHeader('Content-Type' ,'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>  Welcome about!</h1> <br> <p>welcome to about us page <p></body>');
    res.write('</html>')
    res.end();
    }
    if(req.url == "/node")
    {

    // res.setHeader('Content-Type' ,'text/html');
    // res.write('<html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>  Hello My First Nodejs Server!</h1> <br> <p>this is to tell someone <p></body>');
    // res.write('</html>')
    // res.end();
    res.setHeader('Content-Type' ,'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>  Welcome about!</h1> <br> <p>welcome to my NOdejs project <p></body>');
    res.write('</html>')
    res.end();
    }
})

server.listen(3000);