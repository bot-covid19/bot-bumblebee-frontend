const initialState = {
  formData: {}
}
export default (state = initialState, action = {}) => {

  switch (action.type) {

    case 'SAVE_PATIENT_DATA':
      state = { ...state, ...{ formData: action.payload.formData } };
      break;

    default:
      break;
  }
  return state;
};
