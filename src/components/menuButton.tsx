import { Button } from '@mui/material';
import { styled } from '@mui/system';

const MenuButton = styled(Button)({
  borderRadius: '5px',
  width: '90vw',
  height: '50px',
  color: 'black',
  backgroundColor: 'white',
  justifyContent: 'space-between',
  '&:hover': {
    backgroundColor: 'white',
  },
});

export default MenuButton;
