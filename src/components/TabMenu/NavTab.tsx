import { Tab } from '@mui/material';
import { styled } from '@mui/system';

const NavTab = styled(Tab)({
  flexGrow: 1,
  height: '30px',
  width: '50px',
  borderRadius: '9px',
  '&.Mui-selected': {
    backgroundColor: 'black',
    color: 'white',
  },
  '&:not(.Mui-selected)': {
    backgroundColor: 'white',
    color: 'black',
  },
});

export default NavTab;
