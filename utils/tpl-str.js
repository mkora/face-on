module.exports = (strs, ...keys) => {
  let result = '';
  keys.forEach((val, i) => {
    result += strs[i];
    if (Array.isArray(val)) {
      result += val.join('');
    } else if (typeof val === 'object'
      && val.constructor === Object) {
      result += JSON.stringify(val, null, '  ');
    } else {
      result += val;
    }
  });
  result += strs[strs.length - 1];
  return result;
};
