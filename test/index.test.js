const { handler } = require('../src');

const address = '0xEE2D972eC8663f4F83F87fC3adE205DDAbB96c5b'

const event = {
  pathParameters: {
    address,
  },
};

handler(event)
.then((response) => {
  console.log(response);
});
