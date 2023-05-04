const express = require('express');
const log = require('morgan');
const path = require('path');
const cors = require('cors');
// const test = require('./model/testSchema')
const router = require('./router/router');


const app = express();

app.use(log('dev'));
app.use(cors())
app.use(express.urlencoded({extended:false}));
app.use(express.json());



app.use('', router);


// app.post('/test', async(req,res)=>{
//     try{
//         let data = new test(req.body);
//         let value = await data.save();
//         res.status(201).json({
//             success:true,
//             data:value
//         })

//     }catch(err){
//         console.log(err)
//     }
// })

module.exports = app;