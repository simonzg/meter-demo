const meterify = require('meterify').meterify;
const Web3 = require('web3');
const web3 = meterify(new Web3(), 'http://warringstakes.meter.io');

(async ()=>{
    web3.eth.accounts.wallet.add('0xb899673ee943b7d82daa17e0d9b61ba7414cfd357ee5dc03f05341b1d81b0ec5');
    const receipt = await web3.eth.sendTransaction({
        from: '0x1f9983a259f023f733978582259267c1f17303ce', // meter address 0x....
        to: '0xf30320537817d49ddb4f3f6878296e046de0a6fe', // meter address 0x....
        value: '1'+'0'.repeat(18), // amount in Wei
        data: '0000000000', // Data
    });

    console.log(receipt);
})()