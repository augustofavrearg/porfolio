import { Router } from "express";
import { create, remove } from "../controller/post.js";

const routerPost = Router();

routerPost.post("/createPost", create);
routerPost.post("/deletePost/:id", remove); // Utilizamos el método DELETE y pasamos el ID del post como parámetro en la URL

export default routerPost;
