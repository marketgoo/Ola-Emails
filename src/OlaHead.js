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
        add('defaultAttributes', 'mj-body', { 'background-color': tokens('gray-xlight') });

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
            color: ${tokens('brand')};
        }
        p {
            margin-top: 0;
            margin-bottom: ${tokens('size-4')};
        }
        strong {
            font-weight: ${tokens('bold')};
        }
      	ul {
      		padding-left: 1em;
      		margin-left: 0;
      	}`
        );
    }
}

module.exports = OlaHead;
