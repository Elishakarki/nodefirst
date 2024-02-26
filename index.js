// const express = require('express');
// const fs = require('fs');

// const app = express();
// const PORT = 3000;

// // Endpoint to fetch questions and answers
// app.get('/questions', (req, res) => {
//   fs.readFile('question_bank.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading question bank:', err);
//       return res.status(500).json({ error: 'Internal Server Error' });
//     }

//     try {
//       const questionBank = JSON.parse(data);
//       res.json(questionBank);
//     }
//     catch (parseError) {
//       console.error('Error parsing question bank:', parseError);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

// // Importing https module
// const http = require('http');

// // Setting the configuration for
// // the request
// const options = {
// 	hostname: 'jsonplaceholder.typicode.com',
// 	path: '/posts',
// 	method: 'GET'
// };

// // Sending the request
// const req = http.request(options, (res) => {
// 	let data = ''

//   res.on('data', (chunk) => {
//     console.log(chunk);

//     data += chunk;
    
// 	});

// 	// Ending the response 
// 	res.on('end', () => {
// 		console.log('Body:', JSON.parse(data))
// 	});

// }).on("error", (err) => {
// 	console.log("Error: ", err)
// }).end()
