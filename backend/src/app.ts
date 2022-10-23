import express, { Express, Request, Response, NextFunction } from 'express';
import { ApiRouter } from './routes/api-routes';

const port = 5000;

const app: Express = express();
const apiRouter = new ApiRouter;

app.use((request: Request, response: Response, next: NextFunction) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

    next();
});

app.use('', apiRouter.router)

app.use((request: Request, response: Response) => {
    response.type('text/plain');
    response.status(404)
    response.send('Page is not found.');
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:5000`)
}
);

export default app