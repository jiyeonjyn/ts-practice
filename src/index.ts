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

// import * as crypto from "crypto";
import crypto from "crypto"; // tsconfig.json에서 esModuleInterop가 true이기 때문에 가능

interface IBlock {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements IBlock {
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
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }

  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }

  public getBlocks() {
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
