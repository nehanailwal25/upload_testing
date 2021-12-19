const erc20Token = artifacts.require("./erc20Token.sol");
const HR_management = artifacts.require("./HR_management.sol");

module.exports = function(deployer) {
    deployer.deploy(erc20Token, 10000, "TotalSem Token", 18, "TotalSem");
    deployer.deploy(HR_management);
};