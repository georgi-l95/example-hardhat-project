//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import './B.sol';
import './C.sol';

contract A is B,C{
    string private a = 'oi';
}
