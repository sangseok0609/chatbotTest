"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getScript_1 = require("./getScript");
function isHusky(data) {
    // Husky v0.14 and prior used #husky as an identifier.
    // Just in case some previous hooks weren't correctly uninstalled,
    // and for a better transition this will allow v0.15+ to uninstall them as well.
    const previousHuskyIdentifier = '#husky';
    return (data.indexOf(getScript_1.huskyIdentifier) !== -1 ||
        data.indexOf(previousHuskyIdentifier) !== -1);
}
exports.isHusky = isHusky;
function isYorkie(data) {
    return data.indexOf('#yorkie') !== -1;
}
exports.isYorkie = isYorkie;
function isGhooks(data) {
    return data.indexOf('// Generated by ghooks. Do not edit this file.') !== -1;
}
exports.isGhooks = isGhooks;
function isPreCommit(data) {
    return data.indexOf('./node_modules/pre-commit/hook') !== -1;
}
exports.isPreCommit = isPreCommit;
