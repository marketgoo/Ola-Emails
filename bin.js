#!/usr/bin/env node

const fs = require('fs');
const tokens = require('./src/tokens');
const mjml2html = require('mjml');
const argv = require('yargs-parser')(process.argv.slice(2), {
    default: {
        tokens: null,
        validation: 'soft',
        mjml: '',
        file: null,
    },
    boolean: ['show-errors'],
});

require('./index');

try {
    if (argv.tokens) {
        tokens.tokens = require(argv.tokens);
    }

    const code = argv.file ? fs.readFileSync(argv.file, 'UTF-8') : argv._[0];

    if (code) {
        render(code);
    } else {
        let code = '';
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', () => {
            let chunk;

            while ((chunk = process.stdin.read()) !== null) {
                console.log(chunk);
                code += chunk;
            }
            render(code);
        });
        process.stdin.on('end', () => render(code));
    }
} catch (err) {
    console.error(red(err.message));
}

function render(code) {
    const result = mjml2html(code, { validationLevel: argv.validation });

    if (argv.showErrors && result.errors.length) {
        console.error(red(`${result.errors.length} errors found:`));
        console.log(result.errors);
    } else {
        console.log(result.html);
    }
}

function red(message) {
    return '\u001b[' + 31 + 'm' + message + '\u001b[' + 39 + 'm';
}
