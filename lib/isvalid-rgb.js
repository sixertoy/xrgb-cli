module.exports = function (str) {
  const rgbregex = new RegExp(/^(rgba?)\(([0-9]{1,3},[0-9]{1,3},[0-9]{1,3})\,?([0-9]*\.*[0-9]*)?\)$/, 'gi');
  if (!str || typeof(str) !== 'string' || str.trim() === '') return false;
  const matches = rgbregex.exec(str.trim());
  if (!matches || (matches.length <= 1)) return false;
  return matches.slice(1).filter(v => v);
};
