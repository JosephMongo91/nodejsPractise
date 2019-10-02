const express=require('express')

const pug=require('pug')


const app=express()

app.set('view engine','pug')

app.get('/',(req,res)=>{
    res.render('index', { title: 'Explore The Weather', message: 'One Click Away To Know Your Weather' }) 
})

app.post('/',(req,res)=>{
res.send('Get the request to homePage')
})


app.listen(3000,()=>{
    console.log('Server Is Running On Port 3000')
})

