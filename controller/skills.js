import Skill from "../models/skills.js";



export const create = async (req, res) => {
    const {
      title
    } = req.body;

    // Crear un nuevo video con la URL proporcionada
    const newSkill = await Skill.create({
    title
    });
    res.status(201).json({ message: 'New video created', skill: newSkill, created: "ok" });
}