import { expect } from "chai";
import { ethers } from "hardhat";
import { Greeter } from "../typechain";

describe("Greeter", function () {
  let contract: Greeter;

  beforeEach(async () => {
    const Greeter = await ethers.getContractFactory("Greeter");
    contract = await Greeter.deploy();
  });

  describe("sum", () => {
    it("should return 5 when given parameters are 2 and 3", async function () {
      await contract.deployed();

      const sum = await contract.sum(2, 3);

      expect(sum).to.be.not.undefined;
      expect(sum).to.be.not.null;
      expect(sum).to.be.not.NaN;
      expect(sum).to.equal(5);
    });
  });
});
