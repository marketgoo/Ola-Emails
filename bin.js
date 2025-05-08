#!/usr/bin/env node

const fs = require('fs');
const tokens = require('./src/tokens');
const argv = require('yargs-parser')(process.argv.slice(2), {
    default: {
        theme: null,
        validation: 'soft',
        file: null,
        minify: true,
    },
    boolean: ['show-errors', 'minify'],
});

try {
    if (argv.theme) {
        tokens.load(require(argv.theme));
    }

    require('./index');

    const code = argv.file ? fs.readFileSync(argv.file, 'UTF-8') : argv._[0];

    if (code) {
        render(code);
    } else {
        let code = '';
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', () => {
            let chunk;

            while ((chunk = process.stdin.read()) !== null) {
                code += chunk;
            }
        });

        process.stdin.on('end', () => render(code));
    }
} catch (err) {
    console.error(red(err.message));
    process.exit(1);
}

function render(code) {
    const mjml2html = require('mjml');
    const result = mjml2html(tokens.replace(code), {
        validationLevel: argv.validation,
        minify: true,
        beautify: false,
        keepComments: false
    });

    if (argv.showErrors && result.errors.length) {
        console.error(red(`${result.errors.length} errors found:`));
        console.log(result.errors);
        process.exit(1);
    } else {
        console.log(result.html);
    }
}

function red(message) {
    return '\u001b[' + 31 + 'm' + message + '\u001b[' + 39 + 'm';
}
