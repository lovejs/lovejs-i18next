const { DefaultLoader } = require("@lovejs/components/routing");

class i18nextLoader extends DefaultLoader {
    support(type) {
        return type === "i18next";
    }

    getRoutes(definition, routesLoader, inheritOptions = {}, currentName = null) {
        const routes = {
            resources: {
                _path: "/locales/resources.json",
                _methods: ["GET"],
                i18next_resources: null
            },
            missing: {
                _path: "/locales/add/:lng/:ns",
                _methods: ["POST"],
                i18next_missing: null
            }
        };

        return routesLoader.getRoutes({ routes }, inheritOptions, currentName);
    }
}

module.exports = i18nextLoader;
