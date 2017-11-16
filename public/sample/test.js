"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var example = require("./example");
var moment = require("moment");
function test() {
    // 自作モジュール読み込み (example.ts)
    example.hoge();
    // example.tsのHumanクラスを使用
    var Human = example.Human;
    var h1 = new Human("hoge");
    h1.greet();
    var now = moment();
    console.log(now.format("MM月DD日 HH:mm:ss") + " from test.js");
}
exports.test = test;
//# sourceMappingURL=test.js.map