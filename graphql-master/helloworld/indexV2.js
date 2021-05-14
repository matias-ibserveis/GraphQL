// teoria: // https://graphql.org/graphql-js/graphql/
// otras teorias: https://graphql.org/learn/schema/

// Curso James Moore : GraphQl for beginners with Javascript
// Cap8: first GraphQl Server

const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
type Query {
  saludo: String,
  despedida: String
}
`)

const root = {
    saludo: () => 'Buenos dias',
    despedida: () => 'hasta mañana'
};

// para ejecutar: node indexV2.js "query {saludo}" arg0= node, arg1=indexV2.js2 , arg2 = query{saludo}
const query = process.argv[2];

const ejecuta = async() => {
  const resultado = await graphql(schema, query, root)
  console.log(JSON.stringify(resultado, null, 2));
}

ejecuta()

