import Image from 'next/image'
import CustomButton from '../components/Buttons'
import {CustomModal} from '../components/Modals'
import { useState } from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'
import { Main } from 'next/document';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container maxWidth='sm'>
        <CustomButton variant="outlined" onClick={handleButtonClick} />
        <CustomModal title='Deactivate Account' body='Are you sure?' isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  )
}
