var express = require('express')
var app = express()

var sequelize = require('./database')
var employee = require('./employee')
app.use(express.json())

sequelize.sync().then(() => console.log('db is ready'));

app.get('/', async function(req,res){
    const emp = await employee.findAll()
    res.send(emp)
})

app.post('/create', async function(req,res){
    await employee.create(req.body)
    res.send("employee added")
})

app.put('/add', async function(req,res){
    var newname = req.body.newname
    var newphone = req.body.newphone
    var emp = await employee.findOne({where:{name:newname}})
    emp.phone = req.body.newphone
    await emp.save()
    res.send(emp)
})

app.delete('/delete', async function(req,res){
    var newname1 = req.body.newname1
    employee.destroy({where: {name:newname1}})
    res.send("employee deleted")
})

app.listen(3005,() => console.log("server running on port 3005"))