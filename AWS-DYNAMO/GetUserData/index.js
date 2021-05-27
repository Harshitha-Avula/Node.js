'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region:"us-east-1"})

exports.handler = async (event, context) =>  {
  const db = new AWS.DynamoDB({apiVersion:"2021-05-27"});
  const documentClient = new AWS.DynamoDB.DocumentClient({region:"us-east-1"});

  const params = {
      TableName: "users",
      Key:{
        id: "12345"
      }
  }
  
  try {
    const data = await documentClient.get(params).promise();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}