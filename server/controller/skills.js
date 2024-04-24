import Skill from '../models/skills.js';

export const create = async (req, res) => {
    const { skillName, skillDescription, yearsOfExperience, certification } = req.body;
    try {
        const newSkill = await Skill.create({
            skillName,
            skillDescription,
            yearsOfExperience,
            certification
        });
        res.status(201).json(newSkill);
    } catch (error) {
        console.error('Error creating new skill:', error);
        res.status(500).json({ error: 'Failed to create new skill' });
    }
};

export const list = async (req, res) => {
    try {
        const skills = await Skill.findAll();
        res.status(200).json(skills);
    } catch (error) {
        console.error('Error getting all skills:', error);
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
};

export const read = async (req, res) => {
    const { id } = req.params;
    try {
        const skill = await Skill.findByPk(id);
        if (skill) {
            res.status(200).json(skill);
        } else {
            res.status(404).json({ error: 'Skill not found' });
        }
    } catch (error) {
        console.error('Error getting skill by ID:', error);
        res.status(500).json({ error: 'Failed to fetch skill' });
    }
};

export const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Skill.update(req.body, {
            where: { id }
        });
        if (updated) {
            const updatedSkill = await Skill.findByPk(id);
            res.status(200).json(updatedSkill);
        } else {
            res.status(404).json({ error: 'Skill not found' });
        }
    } catch (error) {
        console.error('Error updating skill:', error);
        res.status(500).json({ error: 'Failed to update skill' });
    }
};

export const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Skill.destroy({
            where: { id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Skill not found' });
        }
    } catch (error) {
        console.error('Error deleting skill:', error);
        res.status(500).json({ error: 'Failed to delete skill' });
    }
};
