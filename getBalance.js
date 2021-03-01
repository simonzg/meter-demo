const meterify = require('meterify').meterify;
const Web3 = require('web3');
const web3 = meterify(new Web3(), 'http://warringstakes.meter.io');

(async ()=>{
    const receipt = await web3.eth.getBalance("0x2b6620bd4328e34b437d47b4b33a06ffa5e58c56");

    console.log(receipt);
})()