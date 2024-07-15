import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import { useLanguage } from '../../contexts/LanguageContext';
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from '../../utils/Icons';

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
  const { t } = useLanguage();

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={onClose}
      sx={{ paddingTop: '4vh' }}
      message={t(message)}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={severity}
        onClose={onClose}
        sx={{
          borderRadius: '50px',
          backgroundColor: severity,
          color: 'white',
          border: `1px solid ${severity}`,
          width: '80vh',
        }}
        icon={getIcon(severity)}
      >
        {t(message)}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
