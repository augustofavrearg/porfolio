import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Title from '../ui/Title';
import Label from '../ui/Label';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Button from '../ui/Button';

const API_URL_BASE = 'http://127.0.0.1:80'; // Ajusta la URL base de tu API si es diferente

const CvForm = () => {
  const [cvData, setCvData] = useState({
    name: '',
    file: null // Asegúrate de inicializarlo como null
  });
  
  const handleChange = (e) => {
    if (e.target.name === 'file') {
      // Si el evento es para el campo de archivo, establecer el archivo seleccionado
      setCvData({ ...cvData, file: e.target.files[0] });
    } else {
      // Para otros campos, simplemente actualizar el estado
      setCvData({ ...cvData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Cv data submitted:', cvData);

    try {
      const formData = new FormData(); // Crear un objeto FormData para enviar el archivo
      formData.append('name', cvData.name);
      formData.append('file', cvData.file); // Añadir el archivo al FormData

      const response = await axios.post(
        `${API_URL_BASE}/apiCv/createCv`,
        formData, // Enviar FormData en lugar de cvData
        {
          headers: {
            'Content-Type': 'multipart/form-data' // Establecer el encabezado adecuado para el envío de archivos
          },
        }
      );
      
      console.log('Server response:', response.data);

      if (response.data.success) {
        toast.success("Cv created successfully");
        // Limpiar los datos del formulario después de enviar
        setCvData({
          name: '',
          file: null
        });
      }

    } catch (error) {
      toast.error(error.message);
      console.error('Error sending form data to server:', error);
    }
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={handleSubmit} className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <Title text="Create Cv" />
        
        
        <div>
          <Label htmlFor="name">name</Label>
          <div className="mt-2">
            <Input
              placeholder="Enter the label"
              type="text"
              name="name"
              value={cvData.name}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* Campo de entrada de archivo */}
        <div>
          <Label htmlFor="file">File</Label>
          <div className="mt-2">
            <Input
              type="file"
              name="file"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <Button type="submit">Create Cv</Button>
        </div>
      </form>
    </>
  );
};

export default CvForm;
