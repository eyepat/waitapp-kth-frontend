import React from 'react';
import wipPicture from '../../assets/popup/under-construction.svg';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import { styled } from '@mui/material/styles';

interface WIPImageProps {
  src: string;
}

export const WIPImage = styled('div', {
  shouldForwardProp: (prop) => prop !== 'src',
})<WIPImageProps>`
  width; 100%;
  height: 100%;
  min-width: 70vw;
  min-height: 70vw;
  max-width: 800px;
  max-height: 800px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media(min-width: 900px) {
    max-width: 500px;
    max-height: 500px;
    min-width: 500px;
    min-height: 500px;
  }
`;

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
        <WIPImage src={wipPicture} />
      </DialogContent>
    </Dialog>
  );
};
