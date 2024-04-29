import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de importar axios si aún no lo has hecho
import { toast } from 'react-toastify'; // Asegúrate de importar react-toastify si aún no lo has hecho
import Title from './Title';
import Label from './Label';
import Input from './Input';
import TextArea from './TextArea';
import Button from './Button';

const API_URL_BASE = 'http://127.0.0.1:80'; // Ajusta la URL base de tu API si es diferente

const PostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    label: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      const response = await axios.post(
        `${API_URL_BASE}/apiPost/createPost`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:80',
          },
        }
      );
      
      console.log('Server response:', response.data);
      // Puedes realizar acciones adicionales después de enviar el formulario

      if (response.data.sended === "ok") {
        toast.success("The email was sent successfully");
        setFormData({
          title: '',
          description: '',
          label: '',
        });
      }

    } catch (error) {
      toast.error(error.message); // Accede al mensaje de error usando error.message
      console.error('Error sending form data to server:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Title text="P O S T" />
        <div>
          <Label htmlFor="title">Title</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter the title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <div className="mt-2">
            <TextArea
              placeholder="Enter the description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              height="200px"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="label">Label</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter your label"
              type="text"
              name="label"
              value={formData.label}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Button type="submit">Post</Button>
        </div>
      </form>
    </>
  );
};

export default PostForm;
