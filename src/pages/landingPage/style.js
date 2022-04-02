
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    padding: '1rem',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    paddingTop: '2rem',
    paddingBottom: '3rem',
    height: '60vh',
    width: '90%',
    objectFit: 'cover',
    objectPosition: 'center',
    overflow: 'hidden',
    borderRadius: '50%',
  },
  label: {
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9,
    fontSize: '1rem',
    fontWeight: 900,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: '0.5rem',
    color: 'rgb(240, 247, 247)',
    width: '25%',
    padding: '0.5rem',
  },
  buttonStart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem',
    width: '50%',
  },
  leftArrow: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    margin: 'auto'
  },
  rightArrow: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    margin: 'auto'
  },
  subscribe:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '0.5rem'
  }
}));

export default useStyles;