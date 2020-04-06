let tokens;

function get(key, subkey) {
    if (!tokens) {
        tokens = require('./tokens-defaults.json');
    }

    const value = tokens[key];

    if (subkey) {
        return value[subkey];
    }

    return typeof value === 'object' ? { ...value } : value;
}

get.font = function (name, subkey) {
    return get('font-' + name, subkey);
};

get.load = function (json) {
    tokens = json;
};

module.exports = get;
