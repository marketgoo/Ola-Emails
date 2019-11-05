const tokens = {
    //Colors
    brand: '#0090DA',
    'brand-dark': '#0070A8',
    'brand-focus': '#0090DA33',
    white: '#FFFFFF',
    black: '#2C333E',
    gray: '#57657A',
    'gray-light': '#BBC2CE',
    'gray-xlight': '#F0F2F4',
    error: '#DE0220',
    'error-dark': '#AC0219',
    'error-focus': '#DE022033',
    warning: '#D7800F',
    success: '#17AB4D',
    pro: '#AC18B4',
    'pro-dark': '#811287',
    'pro-focus': '#AC18B433',
    premium: '#F1D34B',

    //Sizes
    'size-1': '2px',
    'size-2': '4px',
    'size-3': '8px',
    'size-4': '14px',
    'size-5': '16px',
    'size-6': '20px',
    'size-7': '28px',
    'size-8': '44px',
    'size-9': '76px',
    'size-10': '140px',
    'size-11': '268px',
    'size-12': '524px',

    //Fonts
    'font-brand': 'Omnes, -apple-system, system-ui, sans-serif',
    'font-ui': '-apple-system, system-ui, sans-serif',
    regular: 400,
    bold: 600
};

//Text styles
tokens['display'] = {
    'font-family': tokens['font-brand'],
    'font-size': tokens['size-9'],
    'font-weight': 500,
    'line-height': 1,
    'letter-spacing': '-0.03%'
};
tokens['title'] = {
    'font-family': tokens['font-brand'],
    'font-size': tokens['size-8'],
    'font-weight': 500,
    'line-height': 1,
    'letter-spacing': '-0.015%'
};
tokens['headline'] = {
    'font-family': tokens['font-ui'],
    'font-size': tokens['size-7'],
    'line-height': 1.28
};
tokens['body'] = {
    'font-family': tokens['font-ui'],
    'font-size': tokens['size-6'],
    'line-height': 1.3
};
tokens['callout'] = {
    'font-family': tokens['font-ui'],
    'font-size': tokens['size-5'],
    'line-height': 1.38
};
tokens['caption'] = {
    'font-family': tokens['font-ui'],
    'font-size': tokens['size-4'],
    'line-height': 1.42
};

//Border radius
tokens['radius-big'] = `${parseInt(tokens['size-8']) / 2}px`;
tokens['radius'] = tokens['size-3'];
tokens['radius-small'] = tokens['size-2'];

//Shadows
tokens['shadow-1'] = '0 1px 3px #0003, 0 0 0 1px #0001';
tokens['shadow-2'] = '0 2px 6px #0003, 0 0 0 1px #0001';
tokens['shadow-3'] = '0 4px 12px #0003, 0 0 0 1px #0001';

export default function(key, subkey) {
    const value = tokens[key];

    if (subkey) {
        return value[subkey];
    }

    return typeof value === 'object' ? { ...value } : value;
}
