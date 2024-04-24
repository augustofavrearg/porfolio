import Project from "../models/project.js";


export const create = async (req, res) => {
    const {
      title
    } = req.body;

    // Crear un nuevo video con la URL proporcionada
    const newProject = await Project.create({
    title
    });
    res.status(201).json({ message: 'New video created', Project: newProject, created: "ok" });
}