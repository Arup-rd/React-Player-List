const expres = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
require('./db/mongoose');
const Data = require('./db/config');
// const morgan = require('morgan');

const app =expres();

//Defining All Middleware
app.use(bodyParser.json());
app.use(cors());
// app.use(morgan('dev'));

let data = [];
// console.log(data);



app.get('/', cors(), async (req, res)=>{
    let result = await Data.find();
    // console.log(result);
    data = result;
    res.status(200).json(result)
})

app.options('/', cors());
app.post('/',  cors(), async (req, res)=>{
    
    const data  = new Data(req.body);
    await data.save();
    // console.log(req.body);    
    // data.push(req.body.data);
    res.status(200).json(data)
})

app.options('/:id', cors);
app.delete('/:id', async (req, res)=>{
    await Data.findByIdAndRemove(req.params.id)
    res.status(200).send('Deleted'); 
})

app.put('/:id', async (req, res)=>{
    await Data.findById(req.params.id, (err, prevData) => {
        if(err) res.status(500).send(err);

        prevData.item = req.body.item || prevData.item;   
        
        prevData.save((err, data) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(data);
        });      
    });
})


var port = 9999;
app.listen(port, ()=>{
    console.log("Server Running on Port "+port);    
})