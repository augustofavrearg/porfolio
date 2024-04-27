import React from 'react';

const Label = (props) => {
  return (
    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={props.htmlFor}>
      {props.children}
    </label>
  );
};

export default Label;
