import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { CircularProgress, Container, Box, Button, Paper, Typography, MobileStepper, CssBaseline } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


import useStyles from './style';
import images from './data';


function SwipeableTextMobileStepper() {

  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
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

  return (
    <>
        <CssBaseline />
      {/* <Container component="main" maxWidth="sd"  > */}
        <Box className={classes.container} maxWidth="xs" xs={12}>
         
          <Paper square elevation={0} >
            <Typography className={classes.label} >{images[activeStep].label}</Typography>
          </Paper>
          <SwipeableViews  axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}  index={activeStep}  onChangeIndex={handleStepChange}  enableMouseEvents >
            {images.map((step, index) => (
              < >
                {Math.abs(activeStep - index) <= 2 ? (
                  !step.imgPath ? <CircularProgress /> : <Box component="img" className={classes.media} src={step.imgPath} alt={step.label}  /> ) : <CircularProgress />}
              </>
            ))}
          </SwipeableViews>
          <MobileStepper  steps={maxSteps} position="static" activeStep={activeStep}
            nextButton={
              <Button  size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}  >
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
          <Button className={classes.buttonStart} type="submit"  onClick={() => navigate('/auth')}  variant="contained">Get Started </Button>
        </Box>
      {/* </Container> */}
    </>
  );
}

export default SwipeableTextMobileStepper;
