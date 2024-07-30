import { forwardRef, useCallback } from 'react';
import { CustomContentProps, SnackbarContent, useSnackbar } from 'notistack';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from '../../utils/Icons';
import { useLanguage } from '../../contexts/LanguageContext';

interface StackNotificationProps extends CustomContentProps {}

const StackNotification = forwardRef<HTMLDivElement, StackNotificationProps>(
  ({ id, ...props }, ref) => {
    const { closeSnackbar } = useSnackbar();
    //const classes = useStyles();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    const getIcon = (
      severity: 'default' | 'error' | 'success' | 'warning' | 'info'
    ) => {
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

    const getMessage = (
      severity: 'default' | 'error' | 'success' | 'warning' | 'info'
    ) => {
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

    const getBorderColor = (
      severity: 'default' | 'error' | 'success' | 'warning' | 'info'
    ) => {
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

    const getTextColor = (
      severity: 'default' | 'error' | 'success' | 'warning' | 'info'
    ) => {
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
      <SnackbarContent ref={ref}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'stretch',
            borderRadius: '20px',
            backgroundColor: 'white',
            color: getTextColor(props.variant),
            border: `1px solid ${getBorderColor(props.variant)}`,
            width: '95vw',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              backgroundColor: getBorderColor(props.variant),
              width: '10vw',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Box marginLeft="0.5vh" marginTop="0.5vh">
              {getIcon(props.variant)}
            </Box>
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ padding: '12px', flex: 1 }}
          >
            <Stack direction="row" gap={0.5} alignItems="center">
              {getMessage(props.variant)}
              {props.message != undefined &&
                typeof props.message === 'string' && (
                  <Typography>{t(props.message)}</Typography>
                )}
            </Stack>
          </Stack>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleDismiss}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>
        </Box>
      </SnackbarContent>
    );
  }
);

export default StackNotification;
