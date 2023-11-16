"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRandomNumber = exports.calledNumbers = exports.randomNumber = void 0;
exports.randomNumber = 0;
exports.calledNumbers = [];
const updateRandomNumber = (number) => {
    exports.randomNumber = number;
};
exports.updateRandomNumber = updateRandomNumber;
