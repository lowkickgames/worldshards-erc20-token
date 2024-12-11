# WorldShards $SHARDS ERC-20 Token

This is a project for the ERC-20 token contract of WorldShards.

Run the compilitation for the contract:
```shell
npx hardhat compile
```

Run the deployment for the token:
```shell
npx hardhat run deployments/deploy.js --network sepolia
```

Run tests:
```shell
npx hardhat test
```

Validate token contract
```shell
npx hardhat verify --contract contracts/WorldShardsToken.sol:WorldShardsToken --network sepolia {Contract Address} "WorldShards" 'SHARDS' 5000000000 {Wallet Address}
```
