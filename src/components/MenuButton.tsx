import { Button } from '@mui/material';
import { styled } from '@mui/system';

const MenuButton = styled(Button)({
  borderRadius: '0 14px 14px 0',
  width: '90vw',
  maxWidth: '100%',
  height: '50px',
  color: 'black',
  fontSize: '1.3rem',
  boxShadow: '0px 0px 0px 0px',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'white',
  },
});

export default MenuButton;
