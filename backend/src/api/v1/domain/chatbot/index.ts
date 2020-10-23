import {
    Router, Request, Response, NextFunction,
  } from 'express';
  import UserMsgController from './controllers/UserMsgController';
  
  const routes = Router();
  const controller = new UserMsgController();
  const prefix = '/usermsgs';
  
  routes.get(`${prefix}/`, (req: Request, res: Response, next: NextFunction) => controller.getUserMsg()
    .then((result) => res.send(result))
    .catch((error) => next(error)));
  
  routes.post(`${prefix}/`, (req: Request, res: Response, next: NextFunction) => controller.createUserMsg({ ...req.body })
    .then((result) => res.send(result))
    .catch((error) => next(error)));
  
  routes.put(`${prefix}/:id`, (req: Request, res: Response, next: NextFunction) => controller.updateUserMsg({
    _id: req.params.id,
    title: req.body.title,
    content: req.body.content,
    status: req.body.status,
  })
    .then((result) => res.send(result))
    .catch((error) => next(error)));
  
  routes.delete(`${prefix}/:id`, (req: Request, res: Response, next: NextFunction) => controller.deleteUserMsg({
    _id: req.params.id,
  })
    .then((result) => res.send(result))
    .catch((error) => next(error)));
  
  export default routes;
  