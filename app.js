import express from 'express'
import ExpressError from './expressError';

const app = express();

app.use(express.json());

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