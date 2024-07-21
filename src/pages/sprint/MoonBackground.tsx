import { styled } from '@mui/material/styles';

interface BackgroundProps {
  src: string;
}

export const Background = styled('div', {
  shouldForwardProp: (prop) => prop !== 'src',
})<BackgroundProps>`
  width: 80vw;
  max-width: 450px;
  height: 100vh;
  background-image: ${({ src }) => `url(${src})`};
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
