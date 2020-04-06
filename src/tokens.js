const tokens = require('./tokens-defaults.json');

function get(key, subkey) {
    const value = get.tokens[key];

    if (subkey) {
        return value[subkey];
    }

    return typeof value === 'object' ? { ...value } : value;
}

get.font = function (name, subkey) {
    return get('font-' + name, subkey);
};

get.tokens = tokens;

module.exports = get;
