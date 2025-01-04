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
