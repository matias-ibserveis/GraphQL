
var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    mayoromenor(num1: Int!, num2: Int): String,
    calcula(num1: Int!, num2: Int): String
  },

`)


// The root provides a resolver function for each API endpoint
var root = {
  mayoromenor: ({num1, num2}) => {
    let output = ''
    if (num1 > num2) output = 'el mayor es el primero'
    else output = 'el mayor es el segundo'
    
    return output
  },

  calcula: ({num1, num2}) => {
    const output = (num1 > num2) ? 'otras funcion num1 mayor'
    :'segundo en otra funcion'
    return output
  }
};

var app = express();
//module.exports.handler = serverless(app);

app.use(bodyParser.json());
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));



app.listen(8888);
console.log('Running a GraphQL API server at http://localhost:8888/9_server_functions');

