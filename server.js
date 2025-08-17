// // 1️⃣ Install Express first
// // npm install express

// const express = require('express');
// const fs = require('fs');
// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON bodies (for POST requests later)
// app.use(express.json());

// // Route 1: Get all quotes
// app.get('/all', (req, res) => {
//     fs.readFile('./example.txt', 'utf8', (err, data) => {
//         if (err) return res.status(500).send('Error reading file');
//         const parsedData = JSON.parse(data);
//         res.json(parsedData);
//     });
// });

// // Route 2: Get quotes by author
// app.get('/quote', (req, res) => {
//     const name = req.query.name; // /quote?name=Steve Jobs
//     fs.readFile('./example.txt', 'utf8', (err, data) => {
//         if (err) return res.status(500).send('Error reading file');
//         const parsedData = JSON.parse(data);
//         const filtered = parsedData.filter(q => q.author === name);
//         res.json(filtered);
//     });
// });

// // Route 3: Random quote
// app.get('/random', (req, res) => {
//     fs.readFile('./example.txt', 'utf8', (err, data) => {
//         if (err) return res.status(500).send('Error reading file');
//         const parsedData = JSON.parse(data);
//         const randomQuote = parsedData[Math.floor(Math.random() * parsedData.length)];
//         res.json(randomQuote);
//     });
// });

// // Route 4: Delete quote by author
// app.delete('/quote', (req, res) => {
//     const name = req.query.name; // /quote?name=Steve Jobs
//     fs.readFile('./example.txt', 'utf8', (err, data) => {
//         if (err) return res.status(500).send('Error reading file');
//         let parsedData = JSON.parse(data);
//         const newData = parsedData.filter(q => q.author !== name);

//         fs.writeFile('./example.txt', JSON.stringify(newData, null, 2), err => {
//             if (err) return res.status(500).send('Failed to delete quote');
//             res.json({ message: `Deleted quote(s) by ${name}`, File: newData });
//         });
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Express server running on http://localhost:${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/quotesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB!'));

// Schema & Model
const quoteSchema = new mongoose.Schema({
  quote: String,
  author: String
});
const Quote = mongoose.model('Quote', quoteSchema);

// --- Routes ---
// 1️⃣ Get all quotes
app.get('/all', async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
});

// 2️⃣ Get quotes by author
app.get('/quote', async (req, res) => {
  const name = req.query.name;
  const quotes = await Quote.find({ author: name });
  res.json(quotes);
});

// 3️⃣ Random quote
app.get('/random', async (req, res) => {
  const quotes = await Quote.find();
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

// 4️⃣ Add new quote
app.post('/quote', async (req, res) => {
  const { quote, author } = req.body;
  const newQuote = new Quote({ quote, author });
  await newQuote.save();
  res.json({ message: 'Quote added!', newQuote });
});

// 5️⃣ Delete quote by author
app.delete('/quote', async (req, res) => {
  const name = req.query.name;
  const result = await Quote.deleteMany({ author: name });
  res.json({ message: `Deleted ${result.deletedCount} quote(s) by ${name}` });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
