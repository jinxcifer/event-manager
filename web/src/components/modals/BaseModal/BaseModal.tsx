import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type PropsType = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose(): void;
};

export const BaseModal: React.FC<PropsType> = ({
  isOpen,
  title,
  children,
  onClose,
}) => {
  return (
    <div>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="base-modal-title"
        aria-describedby="base-modal-description"
      >
        <Box sx={style}>
          <Typography id="base-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          {children}
        </Box>
      </Modal>
    </div>
  );
};
