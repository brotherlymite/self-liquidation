async function main() {
    const [deployer] = await ethers.getSigners();
    
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const SelfLiquidation = await ethers.getContractFactory("Liquidation");
    const selfLiquidation = await SelfLiquidation.deploy('0x88757f2f99175387ab4c6a4b3067c77a695b0349');

    // Hardhat command to verify the contract: 
    // npx hardhat verify 0x33e296eD8FCa673Ec8a540988E430D0a059f0ae3 0x88757f2f99175387ab4c6a4b3067c77a695b0349 --network kovan

    console.log("Contract address:", selfLiquidation.address);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});