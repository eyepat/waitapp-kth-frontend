import { Button, styled } from '@mui/material';
import {
  WhiteBackArrow,
  BackArrow,
  ClosedBook,
  Settings,
  BlackQuestionMark,
} from '../../utils/Icons';
import ki from '../../assets/logo/ki.svg';
import whiteki from '../../assets/logo/whiteKi.svg';
import { useNavigate } from 'react-router-dom';
import { HeaderOpts as HOpts } from '../../types/headerOpts';
import { useState } from 'react';
import Popup from '../PopUps/Popup';
import { Logo } from './Logo';

interface HeaderOpts extends HOpts {
  tabsParent?: string | undefined;
}

export default function Header({
  expanded,
  transparent,
  settings,
  help,
  tabsParent,
}: HeaderOpts) {
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
    backgroundColor: 'hsla(240, 7%, 95%, 1)',
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
  const [open, setOpen] = useState(false);

  function handlePopUp(): void {
    setOpen(true);
  }

  function handleClose(): void {
    setOpen(false);
  }

  function getParent() {
    const steps = tabsParent
      ? window.location.pathname.endsWith(tabsParent)
        ? 1
        : 2
      : 1;
    const path = window.location.pathname.split('/');
    const parent = path.slice(0, path.length - steps).join('/');

    return parent.length > 0 ? parent : '/';
  }

  return (
    // TODO: Update this condition to also check if the current page is healthdata, home, or sprint. If it is, do nothing.
    <TopBar sx={transparent ? { background: 'none' } : undefined}>
      <LeftSide>
        <Button onClick={() => navigate(getParent())}>
          {transparent ? <WhiteBackArrow /> : <BackArrow />}
        </Button>
      </LeftSide>
      <Logo src={transparent ? whiteki : ki} />
      {expanded && (
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
      {settings && (
        <RightSide>
          <ButtonOverride
            onClick={() => {
              navigate('/settings');
            }}
          >
            <Settings />
          </ButtonOverride>
        </RightSide>
      )}
      {help && (
        <RightSide>
          <ButtonOverride onClick={handlePopUp}>
            <BlackQuestionMark />
          </ButtonOverride>
        </RightSide>
      )}

      <Popup
        open={open}
        onClose={handleClose}
        title="why-we-need-this-data"
        content="why-we-need-this-data-text"
      />
    </TopBar>
  );
}
