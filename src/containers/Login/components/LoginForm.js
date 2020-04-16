import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import useForm from 'hooks/useForm';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { validateEmail } from 'utils/utils';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LoginForm() {
  const classes = useStyles();
  const stateSchema = {
    username: { value: '', error: '' },
    pwd: { value: '', error: '' }
  };

  const delay = () => new Promise(resolve => setTimeout(resolve, 3000));

  const stateValidatorSchema = {
    username: {
      required: true,
      validator: {
        func: value => validateEmail(value),
        error: 'Invalid first name format.',
      },
    }
  };

  function onSubmitForm(data) {
    // actions.savePatient(data);
    alert(JSON.stringify(data, null, 2));
  }

  const {
    values,
    errors,
    dirty,
    handleOnChange,
    handleCheckedChange,
    handleOnSubmit,
    setFieldError,
    setFieldValue,
    setStateSchema,
    disable,
  } = useForm(stateSchema, stateValidatorSchema, onSubmitForm);

  React.useEffect(() => {
    delay().then(() => {
      setStateSchema({
        username: { value: '', error: '' },
        pwd: { value: '', error: '' }
      });
    });
  }, []);

  const { username, pwd } = values;


  return (

    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleOnChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pwd"
            label="Senha"
            type="pwd"
            id="pwd"
            autoComplete="current-pwd"
            onChange={handleOnChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={disable}
            onClick={handleOnSubmit}
          >
            Entrar
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default LoginForm;
