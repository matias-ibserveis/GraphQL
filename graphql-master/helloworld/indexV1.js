const { makeExecutableSchema } = require('graphql-tools');
const { graphql } = require('graphql');

const typeDefs = `
schema {
  query: Query
}
type Query {
  saludo: String,
  despedida: String
}
`;

const resolvers = {
  Query: {
    saludo: () => 'Buenos dias',
    despedida: () => 'hasta mañana'
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const query = process.argv[2];

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result, null, 2));
});