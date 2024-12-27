import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import DropDownComponent from './DropDownComponent';
import { GoArrowRight } from 'react-icons/go';

const Selection = ({
  items,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '50px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <DropDownComponent
        items={items}
        currency={fromCurrency}
        setCurrency={setFromCurrency}
      />
      <GoArrowRight />
      <DropDownComponent
        items={items}
        currency={toCurrency}
        setCurrency={setToCurrency}
      />
    </div>
  );
};

export default Selection;
