const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

//GET 
app.get('/', (req, res) => {
    let name = req.query.name;
    let entry = req.query.entry;
    console.log(name);
    res.send({'name' : req.query.name, "entry" : entry})
})

app.listen(3000, () =>{
    console.log('listening');
})