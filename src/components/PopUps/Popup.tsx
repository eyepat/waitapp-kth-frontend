import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Popup: React.FC<PopupProps> = ({ open, onClose, title, content }) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h5" fontWeight="bold" fontSize="20px">
          {t(title)}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" fontSize="18px">
          {t(content)}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;
