import qs from 'qs';

function stringify(obj) {
  return qs.stringify(obj);
}

// 不用qs提供的parse，因为'a=1&a=1'会变成{a:['1','1']}
function parse(str) {
  const parts = str
        .trim()
        .replace(/^\?/, '')
        .split('&');

  return parts.reduce((r, s) => {
    let i = s.indexOf('=');
    let key;
    let val;

    if (i === -1) {
      key = decode(s);
      val = null;
    } else {
      key = decode(s.slice(0, i));
      val = decode(s.slice(i + 1));
    }

    r[key] = val;
    return r;
  }, {});
}

function decode(value) {
  return decodeURIComponent(value);
}

export default {
  stringify,
  parse
};
