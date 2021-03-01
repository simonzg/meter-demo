const meterify = require('meterify').meterify;
const Web3 = require('web3');
const web3 = meterify(new Web3(), 'http://warringstakes.meter.io');

(async ()=>{
    const receipt = await web3.eth.getTransactionReceipt('0x67599bc829a89f5f5f1060e0fe125a53ab902317ec1c626fa4e88e4f43352b3e');

    console.log(receipt);
})()