const isvalid = require('./isvalid-rgb');

function transform (color) {
  return ('0' + color.toString(16)).slice(-2)
}

module.exports = function (matches) {
  let alpha = ((matches[0] === 'rgba') && (matches.length === 3))
    ? parseFloat(matches[2]) : 1;
  let colors = matches[1].split(',').map(v => parseInt(v, 10));
  console.log(`#${transform(colors[0])}${transform(colors[1])}${transform(colors[2])} (alpha: ${alpha})`);
};
