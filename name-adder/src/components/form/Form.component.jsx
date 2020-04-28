import React from 'react';

export const Form = ({ handleSubmit, handleChange, name }) => {
  return (
    <form onSubmit={handleSubmit}>
      <p>Enter a name here:</p>
      <input onChange={handleChange} value={name} />
      <button type="submit">Add Name</button>
    </form>
  );
};
