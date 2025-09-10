require("dotenv").config();
const express = require('express');
const connectDB = require('./src/db/db')
const  phoneModel = require('./src/models/phone.model')


const  app  = express();
app.use(express.json());
app.post("/phone",async(req,res)=>{
    const {phoneName,phonePrice} = req.body;
    console.log(phoneName,phonePrice)

    await phoneModel.create({
        phoneName,
        phonePrice
    })

    res.json({
        message:"Phone Item Created  Successfully",

    })
})

app.get('/phone',async(req,res)=>{

    const phones = await phoneModel.find();
    res.json({
        message:"Items Fetched  Successfully! ",
        phones
    })
})

app.patch("/phone/:id",async(req,res)=>{
    const index = req.params.id;
    // const {phoneName} = req.body;
    // console.log(phoneName)
    const {phoneName,phonePrice} = req.body;
     console.log(phoneName,phonePrice);
    await phoneModel.findOneAndUpdate({
        _id:index
    },{
        phoneName,
        phonePrice
    });

    res.json({
        message:"Phone Details Updated Successfully",
       
    })
})

app.delete("/phone/:id",async(req,res)=>{
    const  index = req.params.id;
    await phoneModel.findOneAndDelete({
        _id:index
    })
    res.json({
        message:"Item Deleted Successfully"
    })
})
connectDB();
app.listen(3000,()=>{
    console.log("My server created Successfully and running  on 3000 port no.")
})

// yh  isliye ki agar ek  beja aur ek nahi beja  toh koi dikkat nahi hai yahan pr  
//upper patch mei upper vaale tarike se beja toh dikkat aegi undefined aega ek  beja aur ek nahi mei 
// {
//     phoneName:phoneName,
//     phonePrice:phonePrice
// }