import { randomBytes } from "node:crypto";

const randomId = randomBytes(16).toString("");

console.log(randomId);
