# WorldShards $SHARDS Token

This project contains the token contract for the [WorldShards Game](https://www.worldshards.online/).

The $SHARDS Token is the main resource of the web3 economy in WorldShards. As a fair launch token, $SHARDS has no allocation to the team or investors, ensuring it to be a fair community driven token.

The maximum circulating supply of $SHARDS Tokens is 5,000,000,000. Players can acquire tokens mainly by engaging with in-game activities whilst having Collectible Items equipped.

For more information, please visit the [official wiki page](https://wiki.worldshards.online/usdshards-token).

## Official $SHARDS Token Contract Addresses

The token is currently deployed on the BNB Smart Chain and the Ethereum blockchain.

- Token address on BNB Smart Chain: [0x38fd4ee2ade8b4be157dfee3d6b8979c78a56145](https://bscscan.com/token/0x38fd4ee2ade8b4be157dfee3d6b8979c78a56145). The token on BNB Smart Chain is deployed from this project.

- Token address on Ethereum: [0x6efe65c2426b51e9aa0427b96c313e5d8715fd06](https://etherscan.io/token/0x6efe65c2426b51e9aa0427b96c313e5d8715fd06). The token on Ethereum is part of the official $SHARDS bridge and is deployed from [the bridge project](https://github.com/lowkickgames/worldshards-erc20-lz-bridge).

> Note: For historical reasons, the token was initially deployed to the Ethereum network. The initial token was not in circulation and [was burnt](https://etherscan.io/tx/0x5aa037e172d644b6add9192f39cd2495d563431c0454cd3572dbfa8d282bec50) to avoid any possible confusion.

## Security Audits

This project has undergone security audits to ensure the integrity and safety of the smart contracts. The audits were conducted by reputable third-party company specializing in blockchain security.

| Audit Company | Audit Date | Commit Hash | Audit Report |
| ------------- | ---------- | ----------- | ------------ |
| [Oxorio](https://oxor.io/) | 2025-07-29 | [3500c62](https://github.com/lowkickgames/worldshards-erc20-token/tree/3500c62145f43e2939370932238aceaec3979749) | [Report PDF](https://oxor-io.github.io/public_audits/WorldShards/Worldshards-BEP-20-Token-Scope-Review-Report-29-07-2025.pdf) |
| [Oxorio](https://oxor.io/) | 2025-01-10 | [0c0f0e1](https://github.com/lowkickgames/worldshards-erc20-token/tree/0c0f0e14abc4f9d2b1bf241fb7eed2ad445f12b4) | [Report PDF](https://oxor-io.github.io/public_audits/WorldShards/WorldShards%20ERC20%20Token%20Report.pdf) |

## Installation and Dependencies

This project is set up to be compiled using Hardhat development environment and [Alchemy](https://www.alchemy.com/) as Provider.

### 1. Install or upgrade Node.js

To compile the project one need to install supported version of Node.js. Hardhat have [detailed guide on how to install or upgrade Node.js.](https://hardhat.org/tutorial/setting-up-the-environment)\
More information about supported versions of Node.js can be found in [this documentation](https://hardhat.org/hardhat-runner/docs/reference/stability-guarantees#node.js-versions-support).

### 2. Clone or download this repository

Use Git to clone this repository or download a ZIP file with latest version.

Docs:\
[How to clone a repository using Git](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository#cloning-a-repository).\
[How to download a ZIP file](https://docs.github.com/en/repositories/working-with-files/using-files/downloading-source-code-archives#downloading-source-code-archives-from-the-repository-view).

### 3. Install dependencies

Go to project folder and run in terminal:

```sh
npm install
```

### 4. Set up environment variables

Create an `.env` file with environment variables. Template file `.env.example` is provided for convenience.

```text
DEPLOYER_PRIVATE_KEY= // Wallet private key. This account initiates deployment process and pays gas fees.
ETHERSCAN_API_KEY= // Etherscan API key to verify contracts.
ALCHEMY_KEY= // Alchemy key for the selected network.
DEPLOY_ADDRESS= // The address of the account to deploy token to.
```

## Contract Compilation

Run the compilation for the contract

```shell
npx hardhat compile
```

## Deployment

Run the deployment for the token on Ethereum testnet

```shell
npx hardhat run deployments/deploy.js --network sepolia
```

Run the deployment for the token on Ethereum mainnet

```shell
npx hardhat run deployments/deploy.js --network mainnet
```

ERC20 contract address will be printed to terminal.

## Testing

Run tests

```shell
npx hardhat test
```

## Contract Validation

Validate token contract on Ethereum testnet

```shell
npx hardhat verify --contract contracts/WorldShardsToken.sol:WorldShardsToken --network sepolia {Contract Address} "WorldShards" 'SHARDS' 5000000000 {Wallet Address}
```

Validate token contract on Ethereum mainnet

```shell
npx hardhat verify --contract contracts/WorldShardsToken.sol:WorldShardsToken --network mainnet {Contract Address} "WorldShards" 'SHARDS' 5000000000 {Wallet Address}
```

## Contract Functions

The contract is default OpenZeppelin implementation of `ERC20` standard.

It have following public functions:

### name

`name() → string`

Returns the name of the token.

### symbol

`symbol() → string`

Returns the symbol of the token, usually a shorter version of the name.

### decimals

`decimals() → uint8`

Returns the number of decimals used to get its user representation.\
For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`).

### totalSupply

`totalSupply() → uint256`

Returns the amount of tokens in existence.

### balanceOf

`balanceOf(address account) → uint256`

Returns the amount of tokens owned by `account`.

### transfer

`transfer(address to, uint256 value) → bool`

Moves a `value` amount of tokens from the caller’s account to `to`.\
Returns a boolean value indicating whether the operation succeeded.

Requirements:

* `to` cannot be the zero address.
* the caller must have a balance of at least `value`.

### allowance

`allowance(address owner, address spender) → uint256`

Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through `transferFrom`. This is zero by default.\
This value changes when `approve` or `transferFrom` are called.

### approve

`approve(address spender, uint256 value) → bool`

Sets a `value` amount of tokens as the allowance of `spender` over the caller’s tokens.\
Returns a boolean value indicating whether the operation succeeded.

Requirements:

* `spender` cannot be the zero address.

### transferFrom

`transferFrom(address from, address to, uint256 value) → bool`

Moves a `value` amount of tokens from `from` to `to` using the allowance mechanism. `value` is then deducted from the caller’s allowance.\
Returns a boolean value indicating whether the operation succeeded.

Requirements:

* `from` and `to` cannot be the zero address.
* `from` must have a balance of at least `value`.
* the caller must have allowance for `from`'s tokens of at least `value`.

### Additional information

More information can be found in OpenZeppelin documentation:

* [ERC-20 contract description](https://docs.openzeppelin.com/contracts/5.x/erc20)
* [ERC-20 contract API reference](https://docs.openzeppelin.com/contracts/5.x/api/token/erc20)
