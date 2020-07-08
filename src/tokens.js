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

    return typeof value === 'object' ? { ...value } : value;
}

get.font = function (...keys) {
    keys[0] = `font-${keys[0]}`;

    return get(...keys);
};

get.load = function (json) {
    tokens = json;
};

module.exports = get;
