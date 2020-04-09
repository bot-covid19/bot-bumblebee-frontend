import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Form() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    otherdoc: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { otherdoc } = state;
  return (
    <Container component="main">
      <CssBaseline />
      <Grid container>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="name">Nome:</InputLabel>
            <Input id="name" aria-describedby="name-helper" />
            <FormHelperText id="name-helper">Escrever algo</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <InputLabel htmlFor="cns_doc">CNS:</InputLabel>
            <Input id="cns_doc" aria-describedby="cns-helper" />
            <FormHelperText id="cns-helper">Escrever algo</FormHelperText>
          </FormControl>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={otherdoc} onChange={handleChange} name="otherdoc" />}
                label="Outro documento"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
}
