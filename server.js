const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');
const expressWinston = require('express-winston');
const graceful = require('node-graceful');
const mjml2html = require('mjml');

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.colorize({ colors: {info: 'cyan'}}),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.Console()
    ]
});

const loggerMiddleware = expressWinston.logger({
    winstonInstance: logger,
    meta: true,
    expressFormat: true,
    colorize: true
});

const server = (argv) => {
    const app = express();
    app.use(loggerMiddleware);
    app.use(bodyParser.text({
        type: () => true
    }));
    app.get('/render', (req, res) => {
        res.send({result: "Ahoiiii"});
    })
    app.post('/render', (req, res) => {
        let code;
        try {
            code = JSON.parse(req.body).mjml;
        } catch (err) {
            code = req.body;
        }

        const result = mjml2html(code, {
            validationLevel: argv.validation,
            beautify: argv.beautify,
            minify: argv.minify,
        });

        res.send({result: result});
    });
    app.use((req, res) => {
        res.status(404).send({ message: "Please use POST /render endpoint to render MJML." });
    });

    const server = app.listen(argv.port, argv.host, () => {
        logger.info(`Started Ola-Emails server on ${argv.host}:${argv.port}`);
    });

    graceful.on('exit', (done, event, signal) => {
        logger.info(`Received ${signal} signal - exiting gracefully...`);
        server.close(done);
    });
}

module.exports = server;
