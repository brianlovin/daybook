import { Router } from 'express';
import jwt from 'jsonwebtoken';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import passport from 'passport';
import cors from '../../shared/middleware/cors';
import session from '../../shared/middleware/session';

const middlewares = Router();

if (process.env.NODE_ENV === 'development') {
  const logging = require('../../shared/middleware/logging');
  middlewares.use(logging);
}

middlewares.use((req, res, next) => {
  if (req.headers && !req.headers.cookie && req.headers.authorization) {
    const token = req.headers.authorization.replace(/^\s*Bearer\s*/, '');
    try {
      const decoded = jwt.verify(token, process.env.API_TOKEN_SECRET);
      if (decoded.cookie) req.headers.cookie = decoded.cookie;
    } catch (err) {}
  }
  next();
});

middlewares.use(cors);
middlewares.options('*', cors);
middlewares.use(cookieParser());
middlewares.use(bodyParser.json());
middlewares.use(session);
middlewares.use(passport.initialize());
middlewares.use(passport.session());
middlewares.use(compression());

export default middlewares;
