import React from 'react';

export const NameItem = ({ name, deleteName }) => (
  <li>
    {name}
    <button onClick={() => deleteName(name)}>Delete</button>
  </li>
);
