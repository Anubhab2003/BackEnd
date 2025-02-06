const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})// "/ is a Home page, req is request and res is response"

app.get('/twitter',(req,res)=>{
    res.send('Ki re Ustaad, Twitter e ki koros?')
})
app.get("/login",(req,res)=>{
    res.send("<h1> Please Login </h1>")
})

app.get('/youtube',(req,res)=>{
    res.send({
        'name':'Youtube',
        'type':'Video Sharing',
        'owner':'Google',
        'founded':'2005'
    })
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})