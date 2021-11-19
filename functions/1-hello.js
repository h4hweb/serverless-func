// domain/.netlify/functions/1-hello
// localhost:8888/.netlify/functions/1-hello

const person = { name: 'Winifred Taylor' }

exports.handler = async (event, context) => {
  // console.log(event)
  // console.log(context)
  return {
    statusCode: 200,
    body: 'Our First Netlify Function for h4hSPCC',
    //body: JSON.stringify(person),
    // test for catching error
    // statusCode: 404,
    // body: 'Resource Not Found',
  }
}
