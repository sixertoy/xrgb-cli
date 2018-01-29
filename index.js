const torgb = require('./lib/torgb');
const tohex = require('./lib/tohex');
const isvalidrgb = require('./lib/isvalid-rgb');
const isvalidhex = require('./lib/isvalid-hex');

const args = process.argv.slice(2);
const ishex = isvalidhex(args[0]);
const isrgb = isvalidrgb(args[0]);

if (!ishex && !isrgb) {
  console.log('Invalid color format');
  process.exit(1);
}

((ishex) ? torgb(args[0].slice(1).trim()) : tohex(isrgb));
process.exit(0);
