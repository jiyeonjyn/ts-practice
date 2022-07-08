"use strict";
/*
// import { init, exit } from "myPackage";
import { init, exit } from "./myFile"; // tsconfig.json에서 allowJs가 true이기 때문에 가능

const config = {
  debug: false,
  url: "",
};

init(config);
exit(1);
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import * as crypto from "crypto";
const crypto_1 = __importDefault(require("crypto")); // tsconfig.json에서 esModuleInterop가 true이기 때문에 가능
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return crypto_1.default.createHash("sha256").update(toHash).digest("hex");
    }
}
class Blockchain {
    constructor() {
        this.blocks = [];
    }
    getPrevHash() {
        if (this.blocks.length === 0)
            return "";
        return this.blocks[this.blocks.length - 1].hash;
    }
    addBlock(data) {
        const newBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
        this.blocks.push(newBlock);
    }
    getBlocks() {
        return [...this.blocks];
        // `return this.blocks`의 경우 this.blocks에 접근하여 변경이 가능하기 때문에 새로운 배열을 만들어서 리턴
    }
}
const blockchain = new Blockchain();
blockchain.addBlock("First one");
blockchain.addBlock("Second one");
blockchain.addBlock("Third one");
blockchain.addBlock("Fourth one");
console.log(blockchain.getBlocks());
