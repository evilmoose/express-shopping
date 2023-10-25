import express from 'express'
import routes from './routes/items'
import ExpressError from './expressError.js';

const app = express();

app.use(express.json());

app.use("/items", routes);

app.use((req, res, next) => {
    return new ExpressError("Not Found", 404);
});

app.use((err, reg, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err.message,
    });
});

export default app;