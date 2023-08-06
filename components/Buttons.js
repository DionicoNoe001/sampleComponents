import React from 'react'
import Button from '@mui/material/Button';

const CustomButton = ({ onClick }) => {
  return (
    <Button variant='outlined' color="primary" onClick={onClick}>
      Modal
    </Button>
  );
};
  
export default CustomButton;