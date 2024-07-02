import { Tabs } from '@mui/material';
import { styled } from '@mui/system';

const NavTabs = styled(Tabs)({
  border: '2px solid black',
  borderRadius: '15px',
  width: '100%',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
});

export default NavTabs;
