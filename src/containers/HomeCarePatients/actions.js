import { request } from 'core/constants';

export const savePatient = (body) => {
  console.log(body);

  request.post('patients', body)
    .then((response) => {
      // dispatch({
      //   type: 'SAVE_PATIENT_DATA',
      //   payload: response.data
      // });
    })
    .catch((error) => {
      console.error(error);
      // dispatch({
      //   type: 'SAVE_PATIENT_DATA_ERROR',
      //   payload: error
      // });
    });
};
