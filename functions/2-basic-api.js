// localhost:8888/.netlify/functions/2-basic-api

// const people = [{ name: 'PMA' }, { name: 'Ina' }]
const items = require('../assets/data')

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    // body: 'hey, this is h4hspcc API',
    body: JSON.stringify(items),
  }
}
