const meterify = require('meterify').meterify;
const Web3 = require('web3');
const web3 = meterify(new Web3(), 'http://warringstakes.meter.io');

(async ()=>{
    const receipt = await web3.eth.getBlock('86142');

    console.log(receipt);
})()