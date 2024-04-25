import { Router } from "express";
import { create, remove, update, list, read } from "../controller/skills.js";


const routerSkills = Router();

routerSkills.post("/createSkill", create)
routerSkills.post("/deleteSkill/:id", remove)
routerSkills.post("/updateSkill/:id", update)
routerSkills.get("/listSkill", list)
routerSkills.get("/getSkill/:id", read)

export default routerSkills