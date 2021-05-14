// teoria: // https://graphql.org/graphql-js/graphql/
// otras teorias: https://graphql.org/learn/schema/
// Curso James Moore : GraphQl for beginners with Javascript
// Cap8: first GraphQl Server

const { buildSchema } = require('graphql');
const express = require('express');
var { graphqlHTTP } = require('express-graphql');

const schema = buildSchema(`
type Query {
  saludo: String
  despedida: String
}
`)

const root = {
    saludo: () => 'Buenos dias',
    despedida: () => 'hasta mañana'
}

// para ejecutar: node clienteV3.js

const app = express();
app.use('/servidor_datos', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(8888)
console.log('Running a GraphQL API server at http://localhost:8888/servidor_datos');


