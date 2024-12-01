async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const weiAmount = (await deployer.getBalance()).toString();
    
    console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));
  
    const Token = await ethers.getContractFactory("WorldShardsTest");
    const args = [
      "World Shards",
      "SHARDS",
      5000000000,
      deployer.address
    ]
    const token = await Token.deploy(...args);
  
    console.log("Token address:", token.address);
  }
  
main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});

