import { Tab } from '@mui/material';
import { styled } from '@mui/system';

const NavTab = styled(Tab)({
  flexGrow: 1,
  height: '30px',
  width: '50px',
  borderRadius: '9px',
  textTransform: 'none',
  '&.Mui-selected': {
    backgroundColor: 'black',
    color: 'white',
  },
  '&:not(.Mui-selected)': {
    backgroundColor: 'transparent',
    color: 'black',
  },
});

export default NavTab;
