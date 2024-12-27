import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DropDownComponent from './DropDownComponent';

const Selection = ({ items }) => {
  return (
    <div style={{ display: 'flex', gap: '50px' }}>
      <DropDownComponent items={items} />
      <DropDownComponent items={items} />
    </div>
  );
};

export default Selection;
