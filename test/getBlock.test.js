const Web3 = require('web3');
const { LoomProvider, CryptoUtils, Client, createJSONRPCClient } = require('loom-js');

const SIDECHAIN_NETWORK = 'extdev-plasma-us1';
const SIDECHAIN_ENDPOINT = 'https://extdev-plasma-us1.dappchains.com';
const SIDECHAIN_DUMMY_PRIVATE_KEY = '3t9RpPn9ZvKw1qYAd74xJflta0blte2qpi9JGclssAOKoKzDhspwnDuiAmTurqxF4+LU5BtgWPcrYsiuXUP8Gg==';

const privateKey = CryptoUtils.B64ToUint8Array(SIDECHAIN_DUMMY_PRIVATE_KEY);

const client = new Client(
  SIDECHAIN_NETWORK,
  createJSONRPCClient({ protocols: [{ url: `${SIDECHAIN_ENDPOINT}/rpc` }] }),
  createJSONRPCClient({ protocols: [{ url: `${SIDECHAIN_ENDPOINT}/query` }] }),
);

const web3 = new Web3(new LoomProvider(client, privateKey));

web3.eth.getBlock(1000)
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
})
