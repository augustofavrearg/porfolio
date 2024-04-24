import { Router } from "express";
import { create, list, remove, read, update } from "../controller/post.js";

const routerPost = Router();

routerPost.post("/createPost", create);
routerPost.post("/deletePost/:id", remove); // Utilizamos el método DELETE y pasamos el ID del post como parámetro en la URL
routerPost.get("/listPost", list)
routerPost.get("/getPost/:id", read); // Obtener un post individual por su ID
routerPost.post("/updatePost/:id", update)

export default routerPost;
