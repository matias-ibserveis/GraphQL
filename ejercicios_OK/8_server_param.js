
//event-based programming node
// https://www.valentinog.com/blog/event/

// Teoria Async
// https://blog.logrocket.com/evolution-async-programming-javascript/

// GraphQL
// https://httptoolkit.tech/blog/simple-graphql-server-without-apollo

// https://graphql.org/graphql-js/running-an-express-graphql-server/


var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    mayoromenor(num1: Int!, num2: Int): String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  mayoromenor: ({num1, num2}) => {
    let output = ''
    if (num1 > num2) output = 'el mayor es el primero'
    else output = 'el mayor es el segundo'
    
    return output
  }
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');


// https://graphql.org/graphql-js/passing-arguments/
// post:  (stringify hecho en 5_module.js)
//  body :  {"query":"hello","variables":{"dice":1,"sides":2}}
