pragma solidity ^0.5.11;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/ownership/Ownable.sol";


/**
 * @title PersonalToken is a basic ERC20Burnable Token
 */
contract PersonalToken is ERC20Burnable, Ownable {
    /**
     * @dev assign totalSupply to account creating this contract */
    constructor(uint256 initialSupply) public {
        _mint(msg.sender, initialSupply);
    }
}
