import AuthRouter from './auth/auth.router.js';
import classroomrouter from './auth/classrooms/classroomrouter.js';
import config from '../config.js';

const jwtMiddleware = require('express-jwt-middleware');

var jwtCheck = jwtMiddleware(config.jwtSecret);


const AppRoutes = (app) => {
    app.use(AuthRouter.routePrefix, AuthRouter.route());
    app.use(classroomrouter.routePrefix,jwtCheck, classroomrouter.route());
}

export default AppRoutes;