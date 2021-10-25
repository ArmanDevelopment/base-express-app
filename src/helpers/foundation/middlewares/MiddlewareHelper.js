class MiddlewareHelper {
    getHandler ({handler}) {
        return handler
    }

    isConditionalMiddleware(target) {
        return ({only = [], except = []}) => only.length ? only.includes(target) : !except.includes(target)
    }

    combine (middlewares) {
        return middlewares.reduce(function(a, b) {
            return function(req, res, next) {
                a(req, res, function(err) {
                    if (err) {
                        return next(err);
                    }
                    b(req, res, next);
                });
            };
        });
    }
}

module.exports = new MiddlewareHelper