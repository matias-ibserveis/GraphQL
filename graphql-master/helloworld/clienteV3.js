
// dentro del body del post y con ayuda de Postman (code)

/*
POST /graphql HTTP/1.1
Host: localhost:8888
Content-Type: application/json

{
    "query": "{ saludo }"
}

*/

const axios = require('axios');
const data = JSON.stringify({"query":"{ saludo }"});

const config = {
  method: 'post',
  url: 'http://localhost:8888/servidor_datos',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

async function ejecuta(config) {
  try{
    const peticion = await axios(config)
    return peticion
  }
  catch(error){
    console.log("el error es:", error)
    return ("error en conexión")
  }
}

async function inicio(config) {
  const resultado = await ejecuta(config)
  console.log("resultado", resultado.data)
}

inicio(config)
