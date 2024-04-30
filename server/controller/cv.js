// Importa multer y otros módulos necesarios
import multer from 'multer';
import Cv from '../models/cv.js';

// Configura el middleware multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Define la carpeta de destino para guardar los archivos
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Utiliza el nombre original del archivo como nombre de archivo en el servidor
    }
});

export const upload = multer({ storage: storage });

// Controlador para crear un nuevo CV
export const create = async (req, res) => {
    const { name } = req.body;
    const cvPath = req.file.path; // Obtener la ruta del archivo en el servidor
    try {
        const newCV = await Cv.create({
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
        const cvs = await Cv.findAll();
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
        const cv = await Cv.findByPk(id);
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
        const [updated] = await Cv.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedCV = await Cv.findByPk(id);
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
        const deleted = await Cv.destroy({
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
