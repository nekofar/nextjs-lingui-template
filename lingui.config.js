/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
    locales: ["ar", "en", "fa"],
    sourceLocale: "en",
    catalogs: [
        {
            path: "src/locales/{locale}/messages",
            include: ["src"],
        },
    ],
    format: "po",
};
