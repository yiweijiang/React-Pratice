import express, { Router, Request, Response, NextFunction } from 'express';
import { ApiControllers } from '../controllers/api-controllers';

const apiControllers = new ApiControllers;

export class ApiRouter {
    router: Router;
    constructor() {
        this.router = express.Router();
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get('/', apiControllers.getHomePage);
        this.router.get('/articles', apiControllers.getArticlesPage);
        this.router.get('/about-me', apiControllers.getAboutPage)
    }
}