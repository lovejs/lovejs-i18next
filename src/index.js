const { Plugin } = require("@lovejs/framework");

class I18nextPlugin extends Plugin {
    async registerServices(container, origin) {
        container.setParameter(`i18next.plugins`, this.get("plugins", []));
        container.setParameter(`i18next.configuration`, this.get("configuration"));

        await container.loadDefinitions(__dirname + "/_framework/services/services.yml", origin);
    }
}

module.exports = I18nextPlugin;
