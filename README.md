# WorldShards $SHARDS ERC-20 Token

This is a project for the ERC-20 token contract of [WorldShards](https://www.worldshards.online/).

For more information, please visit [official wiki page](https://wiki.worldshards.online/usdshards-token).

## Contract Compilation

Run the compilitation for the contract
```shell
npx hardhat compile
```

## Deployment

Run the deployment for the token on testnet
```shell
npx hardhat run deployments/deploy.js --network sepolia
```

Run the deployment for the token on mainnet
```shell
npx hardhat run deployments/deploy.js --network mainnet
```

## Testing

Run tests
```shell
npx hardhat test
```

## Contract Validation

Validate token contract on testnet
```shell
npx hardhat verify --contract contracts/WorldShardsToken.sol:WorldShardsToken --network sepolia {Contract Address} "WorldShards" 'SHARDS' 5000000000 {Wallet Address}
```

Validate token contract on mainnet
```shell
npx hardhat verify --contract contracts/WorldShardsToken.sol:WorldShardsToken --network mainnet {Contract Address} "WorldShards" 'SHARDS' 5000000000 {Wallet Address}
```
