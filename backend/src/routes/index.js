const userRouter = require('./user/index.js');

module.exports = (app, router) => {

    userRouter(router);

    app.use('/', router);
        
}