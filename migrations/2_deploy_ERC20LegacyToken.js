const ERC20LegacyToken = artifacts.require("ERC20LegacyToken"); 
module.exports = function(deployer) {
    deployer.deploy(ERC20LegacyToken,
    "My Golden Coin","MGC",18,1000000000);
};
