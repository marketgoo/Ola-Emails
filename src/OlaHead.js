const { registerDependencies } = require('mjml-validator');
const { HeadComponent } = require('mjml-core');

const tokens = require('./tokens');

registerDependencies({
    'mj-head': ['ola-head'],
});

class OlaHead extends HeadComponent {
    static endingTag = false;

    handler() {
        const { add } = this.context;

        add('defaultAttributes', 'mj-all', { 'font-family': 'Arial' });
        add('defaultAttributes', 'mj-body', { 'background-color': tokens('color-neutral-100') });

        if (tokens('custom-font')) {
            add('fonts', tokens('custom-font', 'name'), tokens('custom-font', 'src'));
        }

        add(
            'style',
            `
        body {
            scroll-behavior: smooth;
            text-rendering: auto;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
        }
        a {
            color: ${tokens('color-primary-500')};
        }
        p {
            margin: 0;
        }
        strong {
            font-weight: ${tokens('font-weight-bold')};
        }
        ul {
            padding-left: 1em;
            margin-left: 0;
            margin-top: 0;
            margin-bottom: ${tokens('size-1')};
        }
        sup {
            font-size: 50%
        }
        /* Colors */
        .ola-color-primary-500 {
            color: ${tokens('color-primary-500')};
        }
        .ola-color-accent-500 {
            color: ${tokens('color-accent-500')};
        }
        .ola-color-white-100 {
            color: ${tokens('color-white-100')};
        }
        .ola-color-neutral-900 {
            color: ${tokens('color-neutral-900')};
        }
        .ola-color-neutral-700 {
            color: ${tokens('color-neutral-700')};
        }
        .ola-color-neutral-400 {
            color: ${tokens('color-neutral-400')};
        }
        .ola-color-neutral-200 {
            color: ${tokens('color-neutral-200')};
        }
        .ola-color-negative-500 {
            color: ${tokens('color-negative-500')};
        }
        .ola-color-warning-500 {
            color: ${tokens('color-warning-500')};
        }
        .ola-color-positive-500 {
            color: ${tokens('color-positive-500')};
        }
        .ola-color-pro-500 {
            color: ${tokens('color-pro-500')};
        }`
        );
    }
}

module.exports = OlaHead;
