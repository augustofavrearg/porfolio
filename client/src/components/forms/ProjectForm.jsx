import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../ui/Title';
import Label from '../ui/Label';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

const API_URL_BASE = 'http://127.0.0.1:80'; // Ajusta la URL base de tu API si es diferente

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    client: '',
    requirements: '',
    budget: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      const response = await axios.post(
        `${API_URL_BASE}/apiproject/createProject`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      
      console.log('Server response:', response.data);

      if (response.data.success) {
        toast.success("Project created successfully");
        setFormData({
          name: '',
          description: '',
          startDate: '',
          endDate: '',
          client: '',
          requirements: '',
          budget: '',
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
        <Title text="Create Project" />
        <div>
          <Label htmlFor="name">Name</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter the project name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <div className="mt-2">
            <TextArea
              placeholder="Enter the project description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              height="200px"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="startDate">Start Date</Label>
          <div className="mt-2">
            <Input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="endDate">End Date</Label>
          <div className="mt-2">
            <Input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="client">Client</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter the client name"
              type="text"
              name="client"
              value={formData.client}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="requirements">Requirements</Label>
          <div className="mt-2">
            <TextArea
              placeholder="Enter the project requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              height="200px"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="budget">Budget</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter the project budget"
              type="number"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Button type="submit">Create Project</Button>
        </div>
      </form>
    </>
  );
};

export default ProjectForm;
