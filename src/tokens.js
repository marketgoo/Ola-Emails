let tokens;

function get(...keys) {
  if (!tokens) {
    tokens = require('./tokens-defaults.json');
  }

  let value = tokens;

  while (keys.length) {
    value = value[keys.shift()];

    if (!value) {
      return;
    }
  }

  return typeof value === 'object' ? {...value} : value;
}

get.load = function (json) {
  tokens = json;
};

get.replace = function (code) {
  return code.replace(/"([^"]+)"/g, (match, value) => {
    if (!value.includes('$')) {
      return match;
    }
    value = value.replace(/\$([\w-]+)/g, (match, token) => {
      return get(token) || match;
    });
    return `"${value}"`;
  });
};

module.exports = get;
