import React from 'react';
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { BigArrow } from '../../utils/Icons';

interface RecipeCardProps {
  img: string;
  title: string;
  onClick?: () => void;
}

const RecipeCardButton = styled(Button)({
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
  boxSizing: 'border-box',
  '&:hover': {
    backgroundColor: 'white',
  },
});

const RecipeImage = styled('img')({
  width: '100px',
  height: '100px',
  borderRadius: '12px 0 0 12px',
  objectFit: 'cover',
});

const RecipeCard: React.FC<RecipeCardProps> = ({ img, title, onClick }) => {
  return (
    <RecipeCardButton onClick={onClick}>
      <RecipeImage src={img} alt={title} />
      <Typography
        variant="body1"
        fontSize="15px"
        fontWeight="bold"
        style={{ flexGrow: 1, marginLeft: '35px', textAlign: 'left' }}
      >
        {title}
      </Typography>
      <BigArrow />
    </RecipeCardButton>
  );
};

export default RecipeCard;
