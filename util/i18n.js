const { LOCALE } = require('../config.json');
const { join } = require('path');
const i18n = require('i18n');

i18n.configure(
    {
        locales: [
            "en"
        ],
        directory: join(__dirname, "..", "locales"),
        defaultLocale: "en",
        retryInDefaultLocale: true,
        objectNotation: true,
        register: global,
    }
)

i18n.setLocale(LOCALE);

module.exports = i18n;