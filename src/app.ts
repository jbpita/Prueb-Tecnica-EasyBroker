import express from 'express';

import IndexRoutes from './routes'

// Initialization
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Routes
app.use(IndexRoutes);

export default app;