const { ethers, upgrades } = require("hardhat");

const PROXY = "0x2C384EE352EEa99Fc8B6dDC7e6b5664397CED172";

async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    console.log("Upgrading Box...");
    await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
}

main();

