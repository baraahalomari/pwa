
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
  container: {

    height: '95vh',
    width: '98vw',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    marginLeft: '5vw',
    marginRight: '5vw',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    padding: '1rem',
    height: '50vh',
    width: '80%',
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
    transform: 'translate(-40%, -60%)',
    zIndex: 9,
    fontSize: '1rem',
    fontWeight: 900,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: '0.5rem',
    color: 'rgb(240, 247, 247)',
    width: '33%',
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
  }
}));

export default useStyles;