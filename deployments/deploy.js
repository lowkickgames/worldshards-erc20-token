async function main() {
    if(!process.env.OWNER_ADDRESS) {
      console.error('OWNER ADDRESS env var missing')
      process.exit(1)
    }
  
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const weiAmount = (await deployer.provider.getBalance(deployer.address)).toString();
    
    console.log("Account balance:", (await ethers.formatEther(weiAmount)));
  
    const Token = await ethers.getContractFactory("WorldShardsToken");
    const args = [
      "WorldShards",
      "SHARDS",
      5000000000,
      process.env.OWNER_ADDRESS
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

