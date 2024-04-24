import Cv from "../models/cv.js";


export const create = async (req, res) => {
    const {
      title
    } = req.body;

    // Crear un nuevo video con la URL proporcionada
    const newCv = await Cv.create({
    title
    });
    res.status(201).json({ message: 'New video created', Cv: newCv, created: "ok" });
}