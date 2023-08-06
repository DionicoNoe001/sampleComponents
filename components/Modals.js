import React, {Component} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CustomModal = ({ isOpen, onClose, title, body }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>
          {body}
        </Typography>
        <Button onClick={onClose} sx={{ mt: 3 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

const DeactivateModal = ({ isOpen, onClose, title, body }) => {
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            {body}
          </Typography>
          <Button onClick={onClose} sx={{ mt: 3 }}>
            Close
          </Button>
        </Box>
      </Modal>
    );
  };

module.exports = {
    DeactivateModal,
    CustomModal
}