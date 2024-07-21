import { styled } from '@mui/material/styles';

interface ImageHeaderProps {
  image: string;
}

export const ImageHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'image',
})<ImageHeaderProps>`
  min-width: 100vw;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 26.75vh;
  top: 0;
  left: 0;
  position: absolute;
  filter: brightness(80%);

  @media (min-width: 1000px) {
    left: auto;
  }
`;
