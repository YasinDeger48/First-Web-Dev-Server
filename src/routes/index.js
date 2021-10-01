import AuthRouter from './auth/auth.router.js';

const AppRoutes = (app) => {
    app.use(AuthRouter.routePrefix, AuthRouter.route());
}

export default AppRoutes;