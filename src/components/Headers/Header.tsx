import {
  Button,
  Dialog,
  DialogContent,
  Typography,
  styled,
} from '@mui/material';
import {
  WhiteBackArrow,
  BackArrow,
  ClosedBook,
  Settings,
  BlackQuestionMark,
  Svg,
} from '../../utils/Icons';
import ki from '../../assets/logo/ki.svg';
import whiteki from '../../assets/logo/whiteKi.svg';
import { useNavigate } from 'react-router-dom';
import { HeaderOpts } from '../../types/headerOpts';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Popup from '../PopUps/Popup';

export default function Header({
  expanded,
  transparent,
  settings,
  help,
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
  const { t } = useLanguage();

  function handlePopUp(): void {
    setOpen(true);
  }

  function handleClose(): void {
    setOpen(false);
  }
  return (
    // TODO: Update this condition to also check if the current page is healthdata, home, or sprint. If it is, do nothing.
    <TopBar sx={transparent ? { background: 'none' } : undefined}>
      <LeftSide>
        <Button onClick={() => navigate(-1)}>
          {transparent ? <WhiteBackArrow /> : <BackArrow />}
        </Button>
      </LeftSide>
      <Svg
        src={transparent ? whiteki : ki}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
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
