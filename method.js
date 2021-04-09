const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const sequelize = require('./database')
const users = require('./users')

sequelize.sync().then(() => console.log('db is ready'))

const app = express()
app.use(express.json())

async function getusers() {
    const user = await users.findAll()
    return user
}

async function getUserbyName(name) {
    const user = await users.findOne({where:{username:name}})
    return user
}

async function userLogin(username,password) {
    var result
    const user = await users.findOne({where:{username:username}})
    if (!user){
        result = ('user not found')
    }else{
        if(user.role == 'admin'){
            if(bcrypt.compareSync(password,user.password)){
                result = await new promises((resolve,reject) => {
                    jwt.sign({user},'secretkey',{expiresIn:'30m'},(err,token) => {
                        console.log(token)
                        if(err) reject(err)
                            resolve(token)
                    })
                })
            }else{
                result = ('wrong password')
            }
        }else{
            result = ('user is not an admin')
        }
    }
    return result
}

async function addUser(username,role,password,token){
    console.log(token)
    let result="";
    const user={
        username: username,
        role: role,
        password: password
    }
    jwt.verify(token, 'secretkey', (err) => {
        if(err){
            console.log(err)
        }else{       
            // let saltRounds=10;
            const salt = bcrypt.genSaltSync(10);
            const hashpassword = bcrypt.hashSync(user.password, salt);
            user.password=hashpassword;
            employeeDetails.create(user)
            result= 'user is inserted';
        }
    });
    return result;
}

async function deleteUser(Id,token){
    let result="";
    jwt.verify(token, 'secretkey', (err) => {
        if(err){
            result= ('token error');
        }else{
            employeeDetails.destroy({where: { id: Id}});
            result= ('user is removed');
        }
    });
    return result;
}

module.exports = {getusers,getUserbyName,userLogin,addUser,deleteUser}