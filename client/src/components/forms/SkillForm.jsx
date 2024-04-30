import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../ui/Title';
import Label from '../ui/Label';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

const API_URL_BASE = 'http://127.0.0.1:80'; // Ajusta la URL base de tu API si es diferente

const SkillForm = () => {
  const [formData, setFormData] = useState({
    skillName: '',
    skillDescription: '',
    yearsOfExperience: '',
    certification: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      const response = await axios.post(
        `${API_URL_BASE}/apiSkill/createSkill`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Server response:', response.data);

      if (response.data.success) {
        toast.success("Skill created successfully");
        setFormData({
          skillName: '',
          skillDescription: '',
          yearsOfExperience: '',
          certification: '',
        });
      }

    } catch (error) {
      toast.error(error.message);
      console.error('Error sending form data to server:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Title text="Create Skill" />
        <div>
          <Label htmlFor="skillName">Skill Name</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter the skill name"
              type="text"
              name="skillName"
              value={formData.skillName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="skillDescription">Description</Label>
          <div className="mt-2">
            <TextArea
              placeholder="Enter the skill description"
              name="skillDescription"
              value={formData.skillDescription}
              onChange={handleChange}
              height="200px"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="yearsOfExperience">Years of Experience</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter years of experience"
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="certification">Certification</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter certification (if any)"
              type="text"
              name="certification"
              value={formData.certification}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Button type="submit">Create Skill</Button>
        </div>
      </form>
    </>
  );
};

export default SkillForm;
