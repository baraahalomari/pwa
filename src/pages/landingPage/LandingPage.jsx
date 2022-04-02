import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { CircularProgress, Box, Button, Paper, Typography, MobileStepper, CssBaseline } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';

import useStyles from './style';
import images from './data';
import logo from './logo.png';

function SwipeableTextMobileStepper() {

  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const [subscribe, setSubscribe] = useState(false);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleSubscribe = () => {
    Notification.requestPermission(function (result) {
      console.log('Notification permission status:', result);
      if (subscribe) {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification('Newsletters App', {
            body: 'you have already subscribed to our newsletters',
            icon: logo,
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'Newsletters App'
          })
        });
      } else if (result === 'granted') {
        navigator.serviceWorker.ready.then(function (registration) {
          registration.showNotification('Newsletters App', {
            body: 'Well done! You will receive notifications',
            icon: logo,
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'Newsletters App'
          });
        });
        setSubscribe(true);
      }
    });
  }



  return (
    <>
      <CssBaseline />
      <Box className={classes.container} maxWidth="xs" xs={12}>
        <Button className={classes.subscribe} variant="outlined" color={!subscribe ? "error" : "success"} onClick={handleSubscribe} >{!subscribe ? 'SUBSUCRIBE' : 'SUBSUCRIBED'}</Button>
        <Paper square elevation={0} >
          <Typography className={classes.label} >{images[activeStep].label}</Typography>
        </Paper>
        <SwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'} index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                !step.imgPath ? <CircularProgress /> : <Box component="img" className={classes.media} src={step.imgPath} alt={step.label} />) : <CircularProgress />}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper steps={maxSteps} position="static" activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}  >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft className={classes.rightArrow} />
              ) : (
                <KeyboardArrowRight className={classes.leftArrow} />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{ display: 'flex' }}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight className={classes.rightArrow} />
              ) : (
                <KeyboardArrowLeft className={classes.leftArrow} />
              )}
            </Button>
          }
        />
        <Button className={classes.buttonStart} type="submit" onClick={() => navigate('/auth')} variant="contained">Get Started </Button>
      </Box>
    </>
  );
}

export default SwipeableTextMobileStepper;
