const i18nextMiddleware = require("koa-i18next");
const { Middleware } = require("@lovejs/components/middlewares");

class i18nextResourcesMiddleware extends Middleware {
    constructor(i18next) {
        super();
        this.i18next = i18next;
        this.middleware = i18nextMiddleware.getResourcesHandler(i18next);
    }

    async getMiddleware() {
        return async (ctx, next) => {
            await this.middleware(ctx);
        };
    }
}

module.exports = i18nextResourcesMiddleware;
