const deployAddress = process.env.DEPLOY_ADDRESS;

async function main() {
    if(!deployAddress) {
      console.error('DEPLOY_ADDRESS env var missing')
      process.exit(1)
    }

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Deployment target account address:", deployAddress);

    const weiAmount = (await deployer.provider.getBalance(deployer.address)).toString();

    console.log("Account balance:", (await ethers.formatEther(weiAmount)));

    const Token = await ethers.getContractFactory("WorldShardsToken");
    const args = [
      "WorldShards",
      "SHARDS",
      5000000000,
      deployAddress
    ]
    const token = await Token.deploy(...args);
    await token.waitForDeployment()

    console.log(`Deployed contract to: ${token.target}`);
  }

main()
    .then(() => process.exit(0))
    .catch((error) => {
    console.error(error);
    process.exit(1);
});
