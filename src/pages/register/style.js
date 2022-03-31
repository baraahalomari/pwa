import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
  },
  avatar: {
    margin: '1rem',
    bgColor: 'secondary.main'
  },
  form: {
    marginTop: '2rem'
  },
  buttonSign: {
    marginTop: '3rem',
    marginBottom: '2rem'
  }
}));

export default useStyles;