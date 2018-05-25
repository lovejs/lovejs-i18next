const i18nextMiddleware = require("koa-i18next");
const { Middleware } = require("@lovejs/components/middlewares");

class i18nextHttpMiddleware extends Middleware {
    constructor(i18next) {
        super();
        this.i18next = i18next;
        this.middleware = i18nextMiddleware(i18next);
    }

    getOptionsSchema() {
        return { type: "object" };
    }

    async getMiddleware(options) {
        const middleware = i18nextMiddleware(this.i18next, options);
        return async (ctx, next) => {
            await middleware(ctx, next);
        };
    }
}

module.exports = i18nextHttpMiddleware;
