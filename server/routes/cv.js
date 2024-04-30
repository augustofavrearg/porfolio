import { Router } from "express";
import { create, remove, update, list, read, upload } from "../controller/cv.js";

const routerCv = Router();

routerCv.post("/createCv",upload.single('file'), create);
routerCv.post("/deleteCv/:id", remove); // Utilizamos el método DELETE y pasamos el ID del post como parámetro en la URL
routerCv.post("/updateCv/:id", update)
routerCv.get("/listCv", list)
routerCv.get("/getCv/:id", read); // Obtener un post individual por su ID

export default routerCv