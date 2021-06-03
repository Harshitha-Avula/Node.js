'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region:"us-east-1"})

/**
 * 
 * @param {*} event 
 * @param {*} context 
 */
exports.handler = async (event, context) =>  {
  const db = new AWS.DynamoDB({apiVersion:"2021-05-27"});
  const documentClient = new AWS.DynamoDB.DocumentClient({region:"us-east-1"});

  const params = {
      TableName: "users",
      Key:{
        id: "12346"
      }
  }
  
  try {
    const data = await documentClient.delete(params).promise();
    console.log("deleted from db");
  } catch (err) {
    console.log(err);
  }
}
test();
 
/**
 * 
 * @param {String} item1 
 * @param {String} item2 
 * @returns concatinated string
 */
function test(item1, item2){
    const result=item1+ " "+ item2; 
    console.log(result)
    return result;
}