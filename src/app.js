require('dotenv').config()
const {ethers} = require('ethers');
const url = process.env.ALCHEMY_URL;
const provider = new ethers.providers.JsonRpcProvider(url);

async function getLatestBlockDetails() {
    const blockDetails = await provider.getBlock(await provider.getBlockNumber());
    console.log("The latest block details are " + JSON.stringify(blockDetails));
}

async function getWalletInfo(wallet) {
    const walletInfo = await provider.getBalance(wallet);
    console.log("The wallet balance is " + ethers.utils.formatEther(walletInfo) + " ETH");
}

function getWallet() {
    let input = document.getElementById("address").value
    console.log(getWalletInfo(input));
}

document.getElementById("myButton").onclick = function () {
    getWallet()
};


getLatestBlockDetails();