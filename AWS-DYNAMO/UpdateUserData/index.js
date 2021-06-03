'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region:"us-east-1"})

exports.handler = async (event, context) =>  {
  const db = new AWS.DynamoDB({apiVersion:"2021-05-27"});
  const documentClient = new AWS.DynamoDB.DocumentClient({region:"us-east-1"});

  const params = {
      TableName: "users",
      Item:{
        id: "12346",
        firstName: "Leena",
        lastName: "mint"
      }
  }
  
  try {
    const data = await documentClient.put(params).promise();
    console.log("Added to DB");
  } catch (err) {
    console.log(err);
  }
}