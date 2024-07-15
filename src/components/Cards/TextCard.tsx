import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { BigArrow } from '../../utils/Icons';
import { useLanguage } from '../../contexts/LanguageContext';

interface TextCardProps {
  title: string;
  text: string;
  onClick?: () => void;
}

const TextCardButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '12px',
  width: '90vw',
  maxWidth: '100%',
  height: '100px',
  color: 'black',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  padding: '0',
  paddingRight: '10px',
  paddingLeft: '10px',
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: 'white',
  },
});

const TextCardContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  marginLeft: '10px',
  textAlign: 'left',
});

const TextCardTitle = styled(Typography)({
  fontSize: '18px',
  marginTop: '-2vh',
  fontWeight: 'bold',
});

const TextCardText = styled(Typography)({
  fontSize: '16px',
});

const TextCard: React.FC<TextCardProps> = ({ title, text, onClick }) => {
  const { t } = useLanguage();
  return (
    <TextCardButton onClick={onClick}>
      <TextCardContent>
        <TextCardTitle variant="body1">{t(title)}</TextCardTitle>
        <TextCardText variant="subtitle1">{t(text)}</TextCardText>
      </TextCardContent>
      <BigArrow />
    </TextCardButton>
  );
};

export default TextCard;
