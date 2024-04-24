import CV from "../models/cv.js";
// Controlador para crear un nuevo CV
export const create = async (req, res) => {
    const { name, cvPath } = req.body;
    try {
        const newCV = await CV.create({
            name,
            cvPath
        });
        res.status(201).json(newCV);
    } catch (error) {
        console.error('Error creating new CV:', error);
        res.status(500).json({ error: 'Failed to create new CV' });
    }
};

// Controlador para obtener todos los CV
export const list = async (req, res) => {
    try {
        const cvs = await CV.findAll();
        res.status(200).json(cvs);
    } catch (error) {
        console.error('Error getting all CVs:', error);
        res.status(500).json({ error: 'Failed to fetch CVs' });
    }
};

// Controlador para obtener un CV por su ID
export const read = async (req, res) => {
    const { id } = req.params;
    try {
        const cv = await CV.findByPk(id);
        if (cv) {
            res.status(200).json(cv);
        } else {
            res.status(404).json({ error: 'CV not found' });
        }
    } catch (error) {
        console.error('Error getting CV by ID:', error);
        res.status(500).json({ error: 'Failed to fetch CV' });
    }
};

// Controlador para actualizar un CV por su ID
export const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await CV.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedCV = await CV.findByPk(id);
            res.status(200).json(updatedCV);
        } else {
            res.status(404).json({ error: 'CV not found' });
        }
    } catch (error) {
        console.error('Error updating CV:', error);
        res.status(500).json({ error: 'Failed to update CV' });
    }
};

// Controlador para eliminar un CV por su ID
export const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await CV.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'CV not found' });
        }
    } catch (error) {
        console.error('Error deleting CV:', error);
        res.status(500).json({ error: 'Failed to delete CV' });
    }
};