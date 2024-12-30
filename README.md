# WorldShards $SHARDS ERC-20 Token

This is a project for the ERC-20 token contract of the [WorldShards Game](https://www.worldshards.online/).

The $SHARDS Token is the main resource of the web3 economy in WorldShards. As a fair launch token, $SHARDS has no allocation to the team or investors, ensuring it to be a fair community driven token.

The maximum circulating supply of $SHARDS Tokens is 5,000,000,000. Players can primarily earn $SHARDS through in-game drops.

The token is deployed to the multi-signature wallet with address [eth:0xdf00F45fae7dD4A19B3709FEe483347477Af68d4](https://etherscan.io/address/0xdf00F45fae7dD4A19B3709FEe483347477Af68d4).

For more information, please visit [official wiki page](https://wiki.worldshards.online/usdshards-token).

## Contract Compilation

Run the compilation for the contract

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
