import { Router } from "express";
import { create } from "../controller/post.js";

const routerPost = Router();

routerPost.post("/createPost", create)

export default routerPost