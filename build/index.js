"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { init, exit } from "myPackage";
const myFile_1 = require("./myFile"); // tsconfig.json에서 allowJs가 true이기 때문에 가능
const config = {
    debug: false,
    url: "",
};
(0, myFile_1.init)(config);
(0, myFile_1.exit)(1);
console.log("hi");
console.log("hello");
