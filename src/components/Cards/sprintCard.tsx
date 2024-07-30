import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { GrayCircleCheck, GreenCircleCheck } from '../../utils/Icons';
import { useLanguage } from '../../contexts/LanguageContext';

interface SprintCardProps {
  img: string;
  title: string;
  onClick?: () => void;
}

const SprintCardButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '12px',
  width: '90vw',
  maxWidth: '100%',
  height: '55px',
  color: 'black',
  backgroundColor: 'hsla(30, 10%, 96%, 1)',
  justifyContent: 'space-between',
  padding: '0',
  marginBottom: '2vh',
  paddingRight: '10px',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: 'hsla(30, 10%, 86%, 1)',
  },
});

const SprintImage = styled('img')({
  width: '55px',
  height: '55px',
  borderRadius: '12px 0 0 12px',
  objectFit: 'cover',
});

const SprintCard: React.FC<SprintCardProps> = ({ img, title, onClick }) => {
  const { t } = useLanguage();
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed((prevState) => !prevState);
    if (onClick) onClick();
  };

  return (
    <SprintCardButton onClick={handleClick}>
      <SprintImage src={img} alt={title} />
      <Typography
        variant="body1"
        fontSize="16px"
        style={{ flexGrow: 1, marginLeft: '10px', textAlign: 'left' }}
      >
        {t(title)}
      </Typography>
      {isPressed ? <GreenCircleCheck /> : <GrayCircleCheck />}
    </SprintCardButton>
  );
};

export default SprintCard;
