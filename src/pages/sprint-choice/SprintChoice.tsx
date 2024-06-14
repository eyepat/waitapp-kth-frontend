import { useState } from 'react';
import {
  Button,
  Radio,
  Stack,
  Typography,
  Box,
  RadioGroup,
} from '@mui/material';
import { useLanguage } from '../../contexts/LanguageContext';
import { styled } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';

const CustomRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked .MuiSvgIcon-root': {
    color: 'white',
    backgroundColor: 'hsla(126, 100%, 38%, 1)',
    borderRadius: '50%',
  },
}));

export default function SprintChoice() {
  const { t } = useLanguage();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleRectangleClick = (value) => {
    setSelectedValue(value);
  };

  const rectangles = [
    {
      imgSrc: 'path/to/image1.jpg',
      header: t('eating-habit'),
      info: t('info-text-eat-habit'),
      value: 'option1',
    },
    {
      imgSrc: 'path/to/image2.jpg',
      header: t('physical-activity'),
      info: t('info-text-physical-activity'),
      value: 'option2',
    },
    {
      imgSrc: 'path/to/image3.jpg',
      header: t('alcohol'),
      info: t('info-text-alcohol'),
      value: 'option3',
    },
  ];

  return (
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
        <RadioGroup value={selectedValue} onChange={handleRadioChange}>
          {rectangles.map((rectangle, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              padding="1rem"
              border="1px solid #ccc"
              margin="5px"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
              onClick={() => handleRectangleClick(rectangle.value)}
            >
              <Box
                component="img"
                src={rectangle.imgSrc}
                alt={rectangle.header}
                width="40%"
              />
              <Stack flexGrow={1} paddingLeft="1rem">
                <Typography variant="h6">{rectangle.header}</Typography>
                <Typography variant="subtitle2" fontSize="75%" textAlign="left">
                  {rectangle.info}
                </Typography>
              </Stack>
              <CustomRadio
                value={rectangle.value}
                checked={selectedValue === rectangle.value}
                onChange={handleRadioChange}
                checkedIcon={<CheckIcon />}
              />
            </Stack>
          ))}
        </RadioGroup>
      </Stack>

      <Stack width="60%">
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: 'black',
            marginTop: '10px',
            marginBottom: '20px',
            borderRadius: '10px',
            width: '100%',
            height: '40px',
            '&:active, &:focus': {
              backgroundColor: 'black',
            },
          }}
        >
          <Typography>{t('next')}</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}
