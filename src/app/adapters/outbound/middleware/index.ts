import { Router } from 'express';
import { responseHandler } from './responseHandler';

export const useOutboundMiddleware = (router: Router): void => {
  router.use(responseHandler());
};