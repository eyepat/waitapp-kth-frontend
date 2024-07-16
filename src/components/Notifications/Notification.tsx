import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { AlertColor } from '@mui/material/Alert';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from '../../utils/Icons';
import { Stack, Typography, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface NotificationProps {
  open: boolean;
  onClose: () => void;
  message: string;
  severity: AlertColor;
}

const Notification: React.FC<NotificationProps> = ({
  open,
  onClose,
  message,
  severity,
}) => {
  const getIcon = (severity: AlertColor) => {
    switch (severity) {
      case 'success':
        return <SuccessIcon />;
      case 'info':
        return <InfoIcon />;
      case 'warning':
        return <WarningIcon />;
      case 'error':
        return <ErrorIcon />;
      default:
        return null;
    }
  };

  const getMessage = (severity: AlertColor) => {
    switch (severity) {
      case 'success':
        return <Typography fontWeight="bold">{t('well-done')}!</Typography>;
      case 'info':
        return <Typography fontWeight="bold">{t('heads-up')}!</Typography>;
      case 'warning':
        return <Typography fontWeight="bold">{t('warning')}!</Typography>;
      case 'error':
        return <Typography fontWeight="bold">{t('oh-snap')}!</Typography>;
      default:
        return null;
    }
  };

  const getBorderColor = (severity: AlertColor) => {
    switch (severity) {
      case 'success':
        return '#00fc5d';
      case 'info':
        return '#7ef2fe';
      case 'warning':
        return '#f6da00';
      case 'error':
        return '#f34029';
      default:
        return '#000000';
    }
  };

  const getTextColor = (severity: AlertColor) => {
    switch (severity) {
      case 'success':
        return '#00d158';
      case 'info':
        return '#00ced2';
      case 'warning':
        return '#d6c518';
      case 'error':
        return '#ff0912';
      default:
        return '#000000';
    }
  };

  const { t } = useLanguage();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={onClose}
      sx={{ paddingTop: '6vh' }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          borderRadius: '20px',
          backgroundColor: 'white',
          color: getTextColor(severity),
          border: `1px solid ${getBorderColor(severity)}`,
          width: '80vh',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            backgroundColor: getBorderColor(severity),
            width: '5vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {getIcon(severity)}
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          gap={1}
          sx={{ padding: '12px', flex: 1 }}
        >
          <Stack direction="row" gap={0.5} alignItems="center">
            {getMessage(severity)}
            <Typography>{t(message)}</Typography>
          </Stack>
        </Stack>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={onClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
      </Box>
    </Snackbar>
  );
};

export default Notification;
