const i18n = require("i18next");

module.exports = (configuration, plugins = []) => {
    const instance = i18n.createInstance();
    plugins.forEach(plugin => instance.use(require(plugin)));
    instance.init(configuration);

    return instance;
};
