// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.0;

contract Whitelist {

  uint8 public maxWhitelistAddresses;

  mapping (address => bool) public whitelistedAddresses;

  uint8 public numAddressesWhitlisted;

  constructor (uint8 _maxWhitelistedAddresses) {
    maxWhitelistAddresses = _maxWhitelistedAddresses;
  }

  function addAddressToWhitelist() public {
    require(whitelistedAddresses[msg.sender], "Already whitelisted");
    require(numAddressesWhitlisted <= maxWhitelistAddresses, "Maximum quota reached for whitelisted addresses");
    whitelistedAddresses[msg.sender] = true;
    numAddressesWhitlisted +=1 ;
  }
}