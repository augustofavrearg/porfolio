import Post from "../models/post.js";

export const create = async (req, res) => {
    const { title, canonical_url, description, label, promo_items } = req.body;

    try {
        // Crear un nuevo post con los datos proporcionados
        const newPost = await Post.create({
            title,
            canonical_url,
            description,
            label,
            promo_items
        });

        res.status(201).json({ message: 'New post created', post: newPost });
    } catch (error) {
        // Manejo de errores si la creación falla
        console.error('Error creating new post:', error);
        res.status(500).json({ message: 'Failed to create new post' });
    }
}
