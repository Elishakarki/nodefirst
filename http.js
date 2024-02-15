const http = require("http");
const port = process.env.port||3000;
 const server=http.createServer((req, res) => {
     res.statusCode = 200;
     res.setHeader('Content-Type', 'text/html');
     res.end('<h1> Hey This is Elisha Karki </h1> <p> this is the space around </P>');
     console.log("server is created");
 });

server.listen(port, () => {
    console.log(`server is listening at port ${port}`);
 })