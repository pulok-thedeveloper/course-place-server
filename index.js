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

app.get('/courses/:id',(req, res)=>{
    const id = req.params.id;
    const selectDetail = courses.find(d => d.id ===id);
    res.send(selectDetail);
})

app.listen(port, ()=> console.log('Course Plcae Server running on port', port));