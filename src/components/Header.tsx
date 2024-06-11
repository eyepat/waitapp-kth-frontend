import { Button, styled } from '@mui/material';
import { BackArrow, ClosedBook, Settings, Svg } from '../utils/Icons';
import ki from '../assets/logo/ki.svg';
import { useNavigate } from 'react-router-dom';

export default function Header({
  showExpandedHeader,
}: {
  showExpandedHeader: boolean;
}) {
  const navigate = useNavigate();
  const TopBar = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20vw',
    position: 'sticky',
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
  const LeftSide = styled('div')({
    display: 'flex',
    justifyContent: 'start',
    marginLeft: '1vw',
    gap: '10vw',
    alignItems: 'center',
  });
  const RightSide = styled('div')({
    display: 'flex',
    justifyContent: 'end',
    marginRight: '5vw',
    gap: '10vw',
    alignItems: 'center',
  });
  const ButtonOverride = styled(Button)({
    margin: '0',
    padding: '0',
    minWidth: '0',
    color: 'inherit',
  });
  return (
    // TODO: Update this condition to also check if the current page is healthdata, home, or sprint. If it is, do nothing.
    <TopBar>
      <LeftSide>
        <Button onClick={() => navigate(-1)}>
          <BackArrow />
        </Button>
      </LeftSide>
      <Svg
        src={ki}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
      {showExpandedHeader && (
        <RightSide>
          <ButtonOverride
            onClick={() => {
              navigate('/knowledge-bank');
            }}
          >
            <ClosedBook />
          </ButtonOverride>
          <ButtonOverride
            onClick={() => {
              navigate('/settings');
            }}
          >
            <Settings />
          </ButtonOverride>
        </RightSide>
      )}
    </TopBar>
  );
}
