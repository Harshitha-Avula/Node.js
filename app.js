const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(express.json())

const sequelize=require('./database');
const users = require('./users');
const { where } = require('sequelize/types');

sequelize.sync().then(() => console.log('db is ready'));
app.get('/', async function(req,res){
    const user= await users.findAll()
    res.send(user)
})
app.post('/create', async function(req,res){
    await users.create(req.body)
    res.send('user is inserted');
})
app.put('/insert',async function(req,res){
    var newname = req.body.name
    const user = await users.findOne({where:{name:newname}})
    res.send(user)
})
app.delete('/delete',async function(req,res){
    var name = req.body.name
    users.pop(name)
    res.send(users)
})

app.listen(3000,async function(){
    console.log("saving...")
   
})