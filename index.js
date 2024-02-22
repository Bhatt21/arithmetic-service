const express = require('express');
const cors = require('cors')
const { add } = require('./arithmetica');
const path = require('path');
const app = express();
const port  = 3000;


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Send the index.html file when accessing the root path
    res.sendFile(path.join(__dirname, 'public', 'arithmetic.html'));
  });
app.get('/sum/:num1/:num2', (req,resp) =>{
    let val1 = parseInt(req.params.num1);
    let val2 = parseInt(req.params.num2);
    let sum = add(val1, val2);
    resp.json({"sum": sum})

})
app.listen(port)
