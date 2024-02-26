// const express = require("express");

// // 👇️ if you use CommonJS
// // const express = require('express')

// const app = express();
// // this line of code executes on localhost:5000
// app.get('/', (req, res) => {
//   res.send('bobbyhadz.com');
// });
// // this line of code executes on localhost:500/books
// app.get('/books', (req, res) => {
//   res.status(200).send([
//     {id: 1, title: 'book 1'},
//     {id: 2, title: 'book 2'},
//   ]);
// });
// // this line of code executes  when the  path that is not mentioned above is typed in url
// app.get('*', (req, res) => {
//     res.send('404 Page Not Found');
//   });
// const port = 5000;
// // if the listen of server is not written the server is not run and it does not listen to the changes
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
