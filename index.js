const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./Fakedata/course.json');

app.get('/', (req, res)=>{
    res.send('Course API Running')
});

app.get('/courses',(req, res)=>{
    res.send(courses)
})



app.listen(port, ()=> console.log('Course Plcae Server running on port', port));