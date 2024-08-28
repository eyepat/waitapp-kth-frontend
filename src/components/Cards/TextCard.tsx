import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { BigArrow } from '../../utils/Icons';
import { useLanguage } from '../../contexts/LanguageContext';

interface TextCardProps {
  title: string;
  text: string;
  onClick?: () => void;
  sx?: any;
}

const TextCardButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '12px',
  width: '90vw',
  maxWidth: '100%',
  minHeight: '100px',
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
  maxHeight: '80vh',
  overflowY: 'auto',
});

const TextCardTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: 'bold',
  margin: 0,
  paddingTop: '5px',
  paddingBottom: '5px',
  whiteSpace: 'normal',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const TextCardText = styled(Typography)(
  ({ textLength }: { textLength: number }) => ({
    fontSize: textLength > 100 ? '14px' : '16px',
    lineHeight: 1.4,
    whiteSpace: 'normal',
    overflow: 'visible',
    textOverflow: 'clip',
    display: 'block',
  })
);

const TextCard: React.FC<TextCardProps> = ({ title, text, onClick, sx }) => {
  const { t } = useLanguage();

  const textLength = text.length;

  return (
    <TextCardButton onClick={onClick} sx={sx} style={{ height: 'auto' }}>
      <TextCardContent>
        <TextCardTitle variant="body1">{t(title)}</TextCardTitle>
        <TextCardText variant="subtitle1" textLength={textLength}>
          {t(text)}
        </TextCardText>
      </TextCardContent>
      <BigArrow />
    </TextCardButton>
  );
};

export default TextCard;
