var express = require('express');

const {
    postgraphile
} = require("postgraphile");

var app = express();
app.use(
    postgraphile(
        process.env.DATABASE_URL || "postgres://postgres:siurell123@0.0.0.0:5432/api",
        "public", {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true,
        }
    )
);
app.listen(4000, () => console.log('go to for playground graphiql http://localhost:4000/graphiql'))