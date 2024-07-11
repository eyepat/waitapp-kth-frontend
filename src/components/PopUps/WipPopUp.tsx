import React from 'react';
import wipPicture from '../../assets/popup/under-construction.svg';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import { Svg } from '../../utils/Icons';

interface WipPopUp {
  open: boolean;
  onClose: () => void;
}

export const WipPopUp: React.FC<WipPopUp> = ({ open, onClose }) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography variant="h5" fontSize="19px" fontWeight="bold">
          {t('this-function-is-wip')}
        </Typography>
      </DialogTitle>
      <DialogContent
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Svg src={wipPicture} style={{ width: '100vh' }} />
      </DialogContent>
    </Dialog>
  );
};
