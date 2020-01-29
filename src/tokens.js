const tokens = require('@marketgoo/ola-themes/themes/mktgoo/tokens.json');

function get(key, subkey) {
    const value = tokens[key];

    if (subkey) {
        return value[subkey];
    }

    return typeof value === 'object' ? { ...value } : value;
}

get.font = function(name, subkey) {
    return get('font-' + name, subkey);
};

module.exports = get;
