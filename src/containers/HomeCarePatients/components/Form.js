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
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import useForm from 'react-hook-form';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import useForm from 'hooks/useForm';

// Redux
import { connect } from 'react-redux';
import * as actions from '../actions';

import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Form() {
  const classes = useStyles();

  const today = new Date();
  const stateSchema = {
    name: { value: '', error: '' },
    isCovid: { value: null, error: '' },
    riskGroup: { value: null, error: '' },
    cnsDoc: { value: '', error: '' },
    gender: { value: null, error: '' },
    otherDoc: { value: false, error: '' },
    ubs: { value: {}, error: '' },
    date: { value: today, error: '' }
  };

  const delay = () => new Promise(resolve => setTimeout(resolve, 3000));

  const stateValidatorSchema = {
    name: {
      required: true,
      validator: {
        func: value => /^[a-zA-Z]+$/.test(value),
        error: 'Invalid first name format.',
      },
    },
    cnsDoc: {
      required: true,
      validator: {
        func: value => /^[0-9]+$/.test(value),
        error: 'Invalid last name format.',
      },
    }
  };

  function onSubmitForm(data) {
    actions.savePatient(data);
    // alert(JSON.stringify(state, null, 2));
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
        name: { value: '', error: '' },
        isCovid: { value: null, error: '' },
        riskGroup: { value: null, error: '' },
        cnsDoc: { value: '', error: '' },
        gender: { value: null, error: '' },
        otherDoc: { value: false, error: '' },
        ubs: { value: {}, error: '' },
        date: { value: today, error: '' }
      });
    });
  }, []);

  const { name, isCovid, riskGroup, gender, date, cnsDoc, otherDoc, ubs } = values;

  const top100Films = [
    { title: 'The Shawshank Redemption' },
    { title: 'The Godfather' },
    { title: 'The Godfather: Part II' },
    { title: 'The Dark Knight' },
    { title: '12 Angry Men' }
  ];
  return (
    <Container component="main">
      <CssBaseline />
      <Grid container>
        <form noValidate>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="name">Nome:</InputLabel>
              <Input id="name" value={name} error={!!errors.name && !!dirty.name} name="name" aria-describedby="name-helper" onChange={handleOnChange} />
              <FormHelperText id="name-helper">Escrever algo</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="cnsDoc">CNS:</InputLabel>
              <Input id="cnsDoc" name="cnsDoc" value={cnsDoc} error={!!errors.cnsDoc && !!dirty.cnsDoc} aria-describedby="cns-helper" onChange={handleOnChange} />
              <FormHelperText id="cns-helper">Escrever algo</FormHelperText>
            </FormControl>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={otherDoc} onChange={handleCheckedChange} name="otherDoc" />}
                  label="Outro documento"
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sexo</FormLabel>
              <RadioGroup aria-label="gender" name="gender" value={gender} onChange={handleOnChange} >
                <FormControlLabel value="F" control={<Radio />} label="Feminino" />
                <FormControlLabel value="M" control={<Radio />} label="Masculino" />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="age">Idade:</InputLabel>
              <Input id="age" type="number" name="age" aria-describedby="age-helper" onChange={handleOnChange} />
              <FormHelperText id="age-helper">Escrever algo</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="phone01">Telefone 01:</InputLabel>
              <Input id="phone01" name="phone01" aria-describedby="phone01-helper" onChange={handleOnChange} />
              <FormHelperText id="phone01-helper">Escrever algo</FormHelperText>
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="phone02">Telefone 02:</InputLabel>
              <Input id="phone02" name="phone02" aria-describedby="phone02-helper" onChange={handleOnChange} />
              <FormHelperText id="phone02-helper">Escrever algo</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="date"
              name="date"
              label="Data"
              type="date"
              defaultValue={date}
              InputLabelProps={{
                shrink: true,
              }}
              onChange={handleOnChange}
            />
            <FormControl>
              <Autocomplete
                id="ubs"
                name="ubs"
                value={ubs}
                getOptionSelected={(option, value) => value.id === option.id}
                options={top100Films}
                getOptionLabel={(option) => option.title}
                onChange={handleOnChange}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="UBS" placeholder="UBS" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Paciente do grupo de risco?</FormLabel>
              <RadioGroup aria-label="riskGroup" name="riskGroup" value={riskGroup} onChange={handleOnChange}>
                <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                <FormControlLabel value="no" control={<Radio />} label="Não" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Caso confirmado de COVID 19?</FormLabel>
              <RadioGroup aria-label="isCovid" name="isCovid" value={isCovid} onChange={handleOnChange}>
                <FormControlLabel value="yes" control={<Radio />} label="Sim" />
                <FormControlLabel value="no" control={<Radio />} label="Não" />
                <FormControlLabel value="without_exam" control={<Radio />} label="Não fez exame" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="obs">Sinais e sintomas:</InputLabel>
              <Input id="obs" name="obs" aria-describedby="obs-helper" onChange={handleOnChange} />
              <FormHelperText id="obs-helper">Escrever algo</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <InputLabel htmlFor="doctorName">Nome do médico:</InputLabel>
              <Input id="doctorName" name="doctorName" aria-describedby="doctorName-helper" onChange={handleOnChange} />
              <FormHelperText id="doctorName-helper">Escrever algo</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
              disabled={disable}
              onClick={handleOnSubmit}
            >
              Salvar
            </Button>
          </Grid>
        </form>
      </Grid>
    </Container>
  );
}

export default Form;
