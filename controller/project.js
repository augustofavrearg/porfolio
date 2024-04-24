import Project from "../models/project.js";

export const create = async (req, res) => {
    const { name, description, startDate, endDate, duration, client, participants, technologies, requirements, budget, status } = req.body;

    try {
        // Crear un nuevo proyecto con los datos proporcionados
        const newProject = await Project.create({
            name,
            description,
            startDate,
            endDate,
            duration,
            client,
            participants,
            technologies,
            requirements,
            budget,
            status
        });

        res.status(201).json({ message: 'New project created', project: newProject });
    } catch (error) {
        // Manejo de errores si la creación falla
        console.error('Error creating new project:', error);
        res.status(500).json({ message: 'Failed to create new project' });
    }
}

export const remove = async (req, res) => {
    const projectId = req.params.id; // Obtén el ID del proyecto de req.params.id

    try {
        const deletedRows = await Project.destroy({
            where: {
                id: projectId // Utiliza el ID del proyecto obtenido de req.params.id
            }
        });

        if (deletedRows > 0) {
            return res.status(200).json({ message: 'Project deleted successfully.', deleted: "ok" });
        } else {
            return res.status(404).json({ message: 'No project found with the provided ID.' });
        }
    } catch (error) {
        console.error('Error deleting project:', error);
        return res.status(500).json({ message: 'Failed to delete project.' });
    }
}

export const list = async (req, res) => {
    try {
        const projects = await Project.findAll(); // Busca todos los proyectos en la base de datos

        res.status(200).json({ projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ message: 'Failed to fetch projects.' });
    }
}

export const read = async (req, res) => {
    const projectId = req.params.id;

    try {
        const project = await Project.findByPk(projectId); // Busca un proyecto por su ID

        if (project) {
            return res.status(200).json({ project });
        } else {
            return res.status(404).json({ message: 'Project not found.' });
        }
    } catch (error) {
        console.error('Error fetching project:', error);
        return res.status(500).json({ message: 'Failed to fetch project.' });
    }
}

export const update = async (req, res) => {
    const projectId = req.params.id;
    const { name, description, startDate, endDate, duration, client, participants, technologies, requirements, budget, status } = req.body;

    try {
        const [updatedRows] = await Project.update(
            { name, description, startDate, endDate, duration, client, participants, technologies, requirements, budget, status },
            { where: { id: projectId } }
        );

        if (updatedRows > 0) {
            const updatedProject = await Project.findByPk(projectId);
            return res.status(200).json({ message: 'Project updated successfully.', project: updatedProject });
        } else {
            return res.status(404).json({ message: 'No project found with the provided ID.' });
        }
    } catch (error) {
        console.error('Error updating project:', error);
        return res.status(500).json({ message: 'Failed to update project.' });
    }
}
