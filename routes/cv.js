import { Router } from "express";
import { create } from "../controller/cv.js";

const routerProject = Router();

routerProject.post("/createProject", create)

export default routerProject