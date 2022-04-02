import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { CircularProgress, Box, Button, Paper, Typography, MobileStepper, CssBaseline } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';

import useStyles from './style';
import images from './data';


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


    // Let's check if the browser supports notifications

    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");

      // Let's check whether notification permissions have already been granted
    } else if (Notification.permission === "granted") {
      if (subscribe) {
        new Notification("You have subscribed to our newsletter");
      } else {
        new Notification("Welcome to our newsletter subscription");
        setSubscribe(true);
      }
      // If it's okay let's create a notification

      // Otherwise, we need to ask the user for permission
    } else if (Notification.permission !== "denied") {

      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
           new Notification("Welcome to our newsletter subscription");
          setSubscribe(true);
        }
      });
    }


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
                !step.imgPath ? <CircularProgress /> : <Box  component="img" className={classes.media} src={step.imgPath} alt={step.label} />) : <CircularProgress />}
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
