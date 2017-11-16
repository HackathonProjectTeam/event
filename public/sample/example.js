"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export例1
function hoge() {
    console.log("boo from example.ts");
}
exports.hoge = hoge;
// export例2
/**
 * @export
 * @class Human
 * @description test用
 */
var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    ;
    Human.prototype.greet = function () {
        console.log("I'm " + this.name + ". Hello! from example.js");
    };
    return Human;
}());
exports.Human = Human;
//# sourceMappingURL=example.js.map