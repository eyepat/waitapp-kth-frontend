import { useState } from 'react';
import {
  Button,
  Radio,
  Stack,
  Typography,
  RadioGroup,
  ThemeProvider,
} from '@mui/material';
import smoke from '../../../assets/sprintchoice/smoke.svg';
import alcohol from '../../../assets/sprintchoice/alcohol.svg';
import food from '../../../assets/sprintchoice/food.svg';
import physact from '../../../assets/sprintchoice/physact.svg';
import { useLanguage } from '../../../contexts/LanguageContext';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';
import { useNavigate } from 'react-router-dom';
import theme from '../../../components/Theme';
import { ImageBox } from '../../../components/Cards/ImageBox';

const CustomRadio = styled(Radio)(({}) => ({
  '&.Mui-checked .MuiSvgIcon-root': {
    color: 'white',
    backgroundColor: 'hsla(126, 100%, 38%, 1)',
    borderRadius: '50%',
  },
}));

export default function SprintChoice() {
  const { t } = useLanguage();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    _: boolean | undefined
  ) => {
    setSelectedValue(event.target.value);
  };

  const handleRectangleClick = (
    // tslint:disable-next-line:@typescript-eslint/no-unused-vars
    _: React.ChangeEvent<HTMLInputElement> | undefined,
    value: string
  ) => {
    setSelectedValue(value);
  };

  const map_color = (dis:boolean) => {if (dis) {return "#bbb"} return "#fff"}

  const rectangles = [
    {
      imgSrc: food,
      header: t('eating-habit'),
      info: t('info-text-eat-habit'),
      value: '/sprint/choice/food-habits',
      disabled: false,
    },
    {
      imgSrc: physact,
      header: t('physical-activity'),
      info: t('info-text-physical-activity'),
      value: '/sprint/choice/physical-activity-pre',
      disabled: false,
    },
    {
      imgSrc: alcohol,
      header: t('alcohol'),
      info: t('info-text-alcohol'),
      value: '/sprint/choice/alcohol-habits',
      disabled: true,
    },
    {
      imgSrc: smoke,
      header: t('stop-smoking'),
      info: t('info-text-stop-smoking'),
      value: '/sprint/choice/stop-smoking',
      disabled: true,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <Stack alignItems="center">
        <Typography variant="h4" marginBottom="5px" alignSelf="center">
          {t('new-habits')}
        </Typography>
        <Typography width="80%" textAlign="left">
          {t('about-new-habits')}
        </Typography>
        <Typography width="80%" marginTop="10px" textAlign="justify">
          {t('select-your-goal')}
        </Typography>

        <Stack width="80%" spacing={2} marginTop="10px">
          <RadioGroup
            value={selectedValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>, _) =>
              handleRadioChange(event, undefined)
            }
          >
            {rectangles.map((rectangle, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                padding="0px"
                border="0px solid #ccc"
                margin="5px"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
                onClick={() => {if (!rectangle.disabled) handleRectangleClick(undefined, rectangle.value)}}
                bgcolor={map_color(rectangle.disabled)}
              >
                <ImageBox image={rectangle.imgSrc} />
                <Stack flexGrow={1} paddingLeft="1rem">
                  <Typography variant="h6">{rectangle.header}</Typography>
                  <Typography
                    variant="subtitle2"
                    fontSize="75%"
                    textAlign="left"
                  >
                    {rectangle.info}
                  </Typography>
                </Stack>
                <CustomRadio
                  value={rectangle.value}
                  checked={selectedValue === rectangle.value}
                  onChange={handleRadioChange}
                  checkedIcon={<CheckIcon />}
                  disabled={rectangle.disabled}
                />
              </Stack>
            ))}
          </RadioGroup>
        </Stack>

        <Stack width="60%" marginTop="20px">
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: 'black',

              marginBottom: '20px',
              borderRadius: '10px',
              width: '100%',
              height: '40px',
              '&:active, &:focus': {
                backgroundColor: 'black',
              },
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
            onClick={() => {
              if (selectedValue) {
                navigate(selectedValue);
              }
            }}
          >
            <Typography>{t('next')}</Typography>
          </Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
