import { Router, json } from "express";

const userRouter = Router();
userRouter.use(json());

export default userRouter;
