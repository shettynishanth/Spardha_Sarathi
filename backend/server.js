// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = 3001;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Upload endpoint to handle the image URL and text
// app.post('/upload', (req, res) => {
//   const { imageUrl, text } = req.body;

//   // Here you can save the image URL and text to your database or process it further
//   console.log('Received:', { imageUrl, text });

//   // Respond with a success message
//   res.json({ message: 'Data received successfully', imageUrl, text });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
