import Post from "../models/post.js";


export const create = async (req, res) => {
    const {
      title
    } = req.body;

    // Crear un nuevo video con la URL proporcionada
    const newPost = await Post.create({
    title
    });
    res.status(201).json({ message: 'New video created', Post: newPost, created: "ok" });
}