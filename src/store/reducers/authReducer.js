const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch(action.type) {
    case 'SIGNIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'SIGNIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return state
    case 'RESET_STATE':
      console.log('auth state resetted');
      return {
        ...state,
        authError: null
      }
    default:
      return state;
  }
}

export default authReducer;