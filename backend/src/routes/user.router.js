import express from "express";
import { getDashboard, getLeaderboard,addIntern } from "../controller/user.controller.js";

const userRouter = express.Router();

userRouter.get("/dashboard", getDashboard);
userRouter.get("/leaderboard", getLeaderboard);
userRouter.post("/interns", addIntern);

export default userRouter;
