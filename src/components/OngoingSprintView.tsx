import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos, Straighten } from '@mui/icons-material';
import { SprintActivityDTO, SprintDTO, UserDTO } from '../api/BaseClient';
import SprintCard from './Cards/SprintCardV2';
import { Chat } from '../utils/Icons';
import { useLanguage } from '../contexts/LanguageContext';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

interface SprintViewProps {
  sprint: SprintDTO;
  currentDay: number;
  totalDays: number;
  user?: UserDTO;
  handleOpenWIP: () => void;
}

export default function SprintView({
  sprint,
  currentDay,
  totalDays,
  user,
  handleOpenWIP,
}: SprintViewProps) {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [slider, setSlider] = useState<Slider | null>(null);

  const todayOffset = dayjs().diff(dayjs(sprint.startDate), 'day');

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    focusOnSelect: true,
  };

  useEffect(() => {
    if (slider) {
      slider.slickGoTo(todayOffset);
    }
  }, [slider, todayOffset]);

  return (
    <Box width="100%" height="100%" minHeight="70vh">
      {
        /*@ts-ignore*/
        <Slider
          {...settings}
          ref={(slider) => {
            setSlider(slider);
          }}
        >
          {sprint.activities?.map((_: SprintActivityDTO, index: number) => (
            <Card
              key={index}
              sx={{
                width: '90%',
                height: '100%',
                minHeight: '60vh',
                justifyContent: 'center',
                alignContent: 'center',
                borderRadius: '1vh',
                marginTop: '3vh',
                margin: 'auto',
                alignSelf: 'center',
                background: 'none',
                border: 'none',
                boxShadow: 'none',
              }}
            >
              <CardContent sx={{ justifyContent: 'center' }}>
                <Typography variant="h6" fontWeight="bold" textAlign="center">
                  {currentDay + (todayOffset + index) === totalDays
                    ? t('today')
                    : dayjs(sprint?.startDate)
                        .add(currentDay + (todayOffset + index) - 1, 'day')
                        .format('DD/MM/YYYY')}
                </Typography>
                {user?.ablationDate && (
                  <Typography marginBottom="1vh" textAlign="center">
                    {dayjs(user.ablationDate).diff(dayjs(), 'days')}{' '}
                    {t('days-until-ablation')}
                  </Typography>
                )}
                <Stack
                  direction="column"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                  }}
                >
                  {sprint && (
                    <SprintCard
                      sprint={sprint}
                      index={index}
                      today={todayOffset + (todayOffset + index) === totalDays}
                    />
                  )}
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{ marginTop: '2vh' }}
                >
                  <Button
                    variant="contained"
                    sx={{ width: '15vh' }}
                    endIcon={<Straighten />}
                    onClick={() => navigate('/health-data/tests')}
                  >
                    <Typography> {t('measure-card-button')} </Typography>
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ width: '15vh' }}
                    endIcon={<Chat />}
                    onClick={handleOpenWIP}
                  >
                    <Typography> {t('chat-card-button')} </Typography>
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Slider>
      }

      <IconButton
        onClick={() => slider?.slickPrev()}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
        }}
      >
        <ArrowBackIos />
      </IconButton>

      <IconButton
        onClick={() => slider?.slickNext()}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0,0,0,0.3)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)' },
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  );
}
