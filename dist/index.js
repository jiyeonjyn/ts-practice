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
Object.defineProperty(exports, "__esModule", { value: true });
console.log("aaaa");
class Block {
    constructor(prevHash, height, data) {
        this.prevHash = prevHash;
        this.height = height;
        this.data = data;
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash, height, data) {
        const toHash = `${prevHash}${height}${data}`;
        return toHash;
    }
}
