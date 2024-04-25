import { Router } from "express";
import { create, update, list, remove, read  } from "../controller/project.js";

const routerProject = Router();

routerProject.post("/createProject", create)
routerProject.post("/deleteProject/:id", remove)
routerProject.post("/updateProject/:id", update)
routerProject.get("/listProject", list)
routerProject.get("/getProject/:id", read)

export default routerProject