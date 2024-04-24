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

export const remove = async (req, res) => {
    const postId = req.params.id; // Obtén el ID del post de req.params.id

    try {
        const deletedRows = await Post.destroy({
            where: {
                id: postId // Utiliza el ID del post obtenido de req.params.id
            }
        });

        if (deletedRows > 0) {
            return res.status(200).json({ message: 'Post deleted successfully.', deleted: "ok" });
        } else {
            return res.status(404).json({ message: 'No post found with the provided ID.' });
        }
    } catch (error) {
        console.error('Error deleting post:', error);
        return res.status(500).json({ message: 'Failed to delete post.' });
    }
}