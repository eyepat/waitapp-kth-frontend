import { styled } from '@mui/material';
import { Svg } from '../utils/Icons';
import ki from '../assets/logo/ki.svg';

export default function Header() {
  const TopBar = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    gap: '20vw',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    minHeight: '8vh',
    backgroundColor: 'white',
    zIndex: '1000',
    'nav-link': {
      color: 'inherit',
    },
    '.active': {
      color: '#00A3E0',
    },
  });
  return (
    <TopBar>
      <Svg src={ki} />
    </TopBar>
  );
}
