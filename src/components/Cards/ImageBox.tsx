import { styled } from '@mui/material/styles';

interface ImageBoxProps {
  image: string;
}

export const ImageBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'image',
})<ImageBoxProps>`
  background-image: ${({ image }) => `url(${image})`};
  max-width: 100px;
  min-width: 100px;
  width: 100px;
  height: 125px;
  margin-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
