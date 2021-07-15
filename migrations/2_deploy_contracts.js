const SafeMath = artifacts.require("SafeMath");
const Tutiral_token = artifacts.require("Tutorial_token")

module.exports = function (deployer) {
  deployer.deploy(SafeMath);
  deployer.deploy(Tutiral_token);
};
