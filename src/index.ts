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

import crypto from "crypto";
console.log("aaaa");

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return toHash;
  }
}
