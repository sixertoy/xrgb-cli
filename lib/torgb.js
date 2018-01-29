const isvalid = require('./isvalid-hex');

module.exports = function (hex) {
  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }
  const bit = parseInt(hex, 16);
  const rgb = `${bit >> 16}, ${(bit >> 8) & 255}, ${bit & 255}`;
  console.log(`rgb(${rgb})`);
  console.log(`rgba(${rgb}, 1)`);
};
