import { Router } from "express";
import { create } from "../controller/skills.js";

const routerSkills = Router();

routerSkills.post("/createSkill", create)

export default routerSkills