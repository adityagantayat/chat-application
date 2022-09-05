"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
async function hashPassword(rawPassword) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(rawPassword, salt);
}
exports.hashPassword = hashPassword;
//# sourceMappingURL=helpers.js.map