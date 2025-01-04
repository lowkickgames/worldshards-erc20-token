//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WorldShardsToken is ERC20 {
    constructor(
        string memory _name,
        string memory _symbol,
        uint _totalSupply,
        address _deployAddress
    ) ERC20(_name, _symbol) {
        _mint(_deployAddress, _totalSupply * 10 ** decimals());
    }
}
