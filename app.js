// const fs = require('fs')
// const http = require('http')
// const path = require('path')
// const os= require('os')
// const url= require('url')
// const crypto = require('crypto')
// const sayHello = require('./greetings')
// const message = sayHello('Monchel')
// const lodash = require('lodash')
// // fs.readFile('example.txt','utf8',(err,data) => {
// //     if(err){
// //         console.error(err)
// //         return;
// //     }
// //     console.log(data)
// // })

// // const content = "Hello Nodejs"

// // fs.writeFile('output.txt',content,(err) =>{
// //     if(err){
// //         console.error(err)
// //         return;
// //     }
// //     console.log("File saved successfully")
// // })

// // const server = http.createServer((req,res) =>{
// // res.statusCode = 200
// // res.setHeader('content-Type','text/plain')
// // res.end('Hello World')
// // })
// // server.listen(3000,()=>{
// //     console.log("Server Running at Http://localhost:3000")
// // })

// // const directory = '/user/local'
// // const filename = 'example.txt'
// // const fullpath = path.join(directory,filename)
// // console.log(fullpath)

// // console.log('platform',os.platform())
// // console.log('cpu',os.arch())
// // console.log('total memory',os.totalmem())
// // console.log('free memory',os.freemem())

// // const myurl= new URL('https://example.com:808/path/name?querry=hello#hash')
// // console.log('Host',myurl.host);
// // console.log('search',myurl.searchParams.get('querry'));

// // const hash = crypto.createHash('sha256')
// // hash.update('hello world')
// // console.log(hash.digest('hex'))

// // const numbers = [1,2,3,4,5]
// // const reversed = lodash.reverse(numbers)
// // console.log(reversed);

// // const readablestream = fs.createReadStream('example.txt',{encoding:'utf-8'})
// // readablestream.on('data')








// // const http = require('http')
// // const url = require('url')

// // const server = http.createServer((req,res)=>{
// // if(req.method === 'GET' && req.url.startsWith('/search')){

// // const queryObject = url.parse(req.url, true).query

// // res.writeHead(200,{'content-type':'application/json'})
// // res.end(JSON.stringify({message:'Query received', queryObject}))

// // }else{
// // res.writeHead(404,{'content-type':'text/plain'})
// // res.end('Route not founddd')
// // }
// // })

// // const PORT = 3000

// // server.listen(PORT,()=>{
// //     console.log(`Server is runnign on http://localhost:${PORT}`)
// // })






// // const http = require('http')
// // const url = require('url')
// // const PORT= 3000

// // const routes = {
// //     '/' : (req,res) =>{
// //     res.writeHead(404,{'Content-type':'text/plain'})
// //     res.end('Welcome to home page')
// //     },
// //      '/about' : (req,res) =>{
// //     res.writeHead(404,{'Content-type':'text/plain'})
// //     res.end('Welcome to about page')
// //     },
// //      '/services' : (req,res) =>{
// //     res.writeHead(404,{'Content-type':'text/plain'})
// //     res.end('Welcome to services page')
// //     },
// //      '/notfound' : (req,res) =>{
// //     res.writeHead(404,{'Content-type':'text/plain'})
// //     res.end('Sorry not found')
// //     }
// // }


// // const server = http.createServer((req,res) =>{

// //     if(req.method === 'GET' && req.url.startsWith('/search')){
     
// //        const querybject = url.parse(req.url,true).query

// //         res.writeHead(200,{'Content-type':'application/json'})
// //         res.end(JSON.stringify({message : 'data received',querybject}))
    
// //     }else{
// //         res.writeHead(404,{'Content-type':'text/plain'})
// //         res.end('Data not received we')
// //     }
// //    const pathname = url.parse(req.url,true).pathname 

// //    if(routes[pathname]){
// //     routes[pathname](req,res)
// //    }else{
// //     routes['/notfound'](req,res)
// //    }

// // })





// // server.listen(PORT,()=>{
// //     console.log(`Server is running on http://localhost:${PORT}`)
// // })








// const http = require('http');
// const fs = require('fs');
// const url =  require('url');


// const server = http.createServer((req,res) =>{


// if ((req.method === 'GET') && req.url === '/all') {

//     fs.readFile('./example.txt','utf8',(err, data) =>{
//         if(err){
//     res.writeHead(404,{'content-type' : 'text/plain'})
//     res.end('Error Occured')
//     return;
//         }
//    let parseddata = JSON.parse(data) 
//  res.writeHead(200,{'content-type' : 'application/json'})
//     res.end(JSON.stringify({ File: parseddata }))
//     console.log('sent')

//     })
   
// }else if ((req.method === 'GET') && req.url.startsWith('/quote')) {
//  const url1 = url.parse(req.url,true).query; 
//  const name = url1.name
//     fs.readFile('./example.txt','utf8',(err, data) =>{
//         if(err){
//     res.writeHead(404,{'content-type' : 'text/plain'})
//     res.end('Error Occured')
//     return;
//         }

//    let parseddata = JSON.parse(data) 
//   const filtered = parseddata.filter(q => q.author === name);

//  res.writeHead(200,{'content-type' : 'application/json'})
//     res.end(JSON.stringify({ File: filtered }))
//     console.log('sent')




//     })
   
// }
// else if ((req.method === 'DELETE') && req.url.startsWith('/quote')) {
//   const query = url.parse(req.url, true).query;
//   const name = query.name;

//   fs.readFile('./example.txt', 'utf8', (err, data) => {
//     if (err) {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       res.end('Error Occurred');
//       return;
//     }

//     let parsedData = JSON.parse(data);
//     // Filter out quotes to delete
//     const newData = parsedData.filter(q => q.author !== name);

//     // Write the updated array back to the file
//     fs.writeFile('./example.txt', JSON.stringify(newData, null, 2), (err) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Failed to delete quote');
//         return;
//       }

//       res.writeHead(200, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ message: `Deleted quote(s) by ${name}`, File: newData }));
//       console.log(`Deleted quote(s) by ${name}`);
//     });
//   });
// }

// else{
//     res.writeHead(404,{'content-type' : 'text/plain'})
//     res.end('Error Occured')
// }


// })

// server.listen(3000,() =>{
//     console.log('The app is running on http://localhost:3000');
// })




// app.js
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('Connection error:', err));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('✅ Connected to MongoDB Atlas!'));

// Schema & Model
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String 
});

const Student = mongoose.model('Student', studentSchema);

// Routes

// 1️⃣ Get all students
app.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
        console.log('Sent all students');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

// 2️⃣ Add new student
app.post('/student', async (req, res) => {
    try {
        const { name, age, phone } = req.body;
        const newStudent = new Student({ name, age, phone });
        await newStudent.save();
        res.json({ message: 'Student added!', newStudent });
        console.log('Saved:', newStudent);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error adding student' });
    }
});

// 3️⃣ Login
app.post('/login', async (req, res) => {
    try {
        const { name } = req.body;
        const student = await Student.findOne({ name });

        if (student) {
            res.json({
                message: 'Logged in successfully!',
                name: student.name,
                age: student.age,
                phone: student.phone
            });
            console.log(name, 'logged in');
        } else {
            res.json({ message: 'User not found' });
            console.log(name, 'user not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
