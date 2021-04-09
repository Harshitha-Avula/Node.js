const express = require('express')
const methods = require('./method')

const app = express()
app.use(express.json())

module.exports.getUsers = async() => {
    const user = await methods.getUsers()
    return formatResponse(200,user)
}

module.exports.getUserbyName = async(event) => {
    const user = await methods.getUserbyName(event.body.name)
    return formatResponse(200,user)
}

module.exports.userLogin = async(event) => {
    const body = JSON.parse(event.body)
    const response = await methods.userLogin(body.password,body.name)
    return formatResponse(200,response)
}

module.exports.addUser = async(event) => {
    console.log(event.headers.authorization)
    const bearer = event.headers.authorization.split(' ')
    const bearerToken = bearer[1]
    event.headers.authorization = bearerToken
    const body = JSON.parse(event.body)
    const response = await methods.userLogin(body.username,body.password,body.role,event.headers.authorization)
    return formatResponse(200,response)
}

module.exports.deleteUser = async (event) => {
    const bearer=event.headers.Authorization.split(' ');
    const bearerToken= bearer[1];
    event.headers.Authorization=bearerToken;
    console.log(event.headers.Authorization)
    const response= await methods.deleteUser(event.pathParameters.id,event.headers.Authorization);
    return formatResponse(200,response)
  
}

const formatResponse = function(statusCode, body) {
    const response = {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        isBase64Encoded: false,
        body: JSON.stringify(body)
    };
    return response;
};

app.listen(3000, () => {
    console.log("App is running");
});