import React from 'react';

const Title = ({ text }) => {
  // Determinar el nivel de título (h1, h2, h3, etc.) basado en la prop 'level'
 

  return (
    <h1 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
      {text}
    </h1>
  );
};

export default Title;
