const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("WorldShardsToken", function () {
  let WorldShardsToken;
  let worldShardsToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();
    WorldShardsToken = await ethers.getContractFactory("WorldShardsToken");
    worldShardsToken = await WorldShardsToken.deploy("World Shards", "WORLDSHARDS", 1000000, owner.address);
    await worldShardsToken.waitForDeployment();
  });

  it("Should initialize with the correct name, symbol, and total supply", async function () {
    expect(await worldShardsToken.name()).to.equal("World Shards");
    expect(await worldShardsToken.symbol()).to.equal("WORLDSHARDS");
    expect(await worldShardsToken.totalSupply()).to.equal(ethers.parseUnits("1000000", 18));
  });

  it("Should assign the total supply of tokens to the owner", async function () {
    const ownerBalance = await worldShardsToken.balanceOf(owner.address);
    expect(await worldShardsToken.totalSupply()).to.equal(ownerBalance);
  });

  it("Should allow transfers between accounts", async function () {
    await worldShardsToken.transfer(addr1.address, ethers.parseUnits("1000", 18));
    const addr1Balance = await worldShardsToken.balanceOf(addr1.address);
    expect(addr1Balance).to.equal(ethers.parseUnits("1000", 18));

    await worldShardsToken.connect(addr1).transfer(addr2.address, ethers.parseUnits("500", 18));
    const addr2Balance = await worldShardsToken.balanceOf(addr2.address);
    expect(addr2Balance).to.equal(ethers.parseUnits("500", 18));
  });

  it("Should fail if sender doesn’t have enough tokens", async function () {
    const initialOwnerBalance = await worldShardsToken.balanceOf(owner.address);
    await expect(worldShardsToken.connect(addr1).transfer(owner.address, ethers.parseUnits("1", 18)))
      .to.be.revertedWithCustomError(worldShardsToken, "ERC20InsufficientBalance");
    expect(await worldShardsToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
  });
});