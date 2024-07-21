import { styled } from '@mui/material/styles';

interface LogoProps {
  src: string;
}

export const Logo = styled('div', {
  shouldForwardProp: (prop) => prop !== 'src',
})<LogoProps>`
  width: 2.7em;
  height: 2.7em;
  background-image: ${({ src }) => `url(${src})`};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
