const express = require('express');
const path = require('path');
const app = express()
const port  = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // Send the index.html file when accessing the root path
    res.sendFile(path.join(__dirname, 'public', 'arthimetic.html'));
  });
app.get('/sum/:num1/:num2', (req,resp) =>{
    let val1 = parseInt(req.params.num1);
    let val2 = parseInt(req.params.num2);
    let sum = val1+val2;
    resp.json({"sum": sum})

})
app.listen(port)
