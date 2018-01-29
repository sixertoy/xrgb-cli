module.exports = function (str) {
  const hexregex = new RegExp(/^#([A-F0-9]{3}|[A-F0-9]{6})$/, 'gi');
  return (
    str
    && typeof(str) === 'string'
    && str.trim() !== ''
    && hexregex.test(str.trim())
  ) || false;
};
