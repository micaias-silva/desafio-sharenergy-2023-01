const initialState =
  sessionStorage.getItem('token') || localStorage.getItem('token');

const sessionReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_TOKEN': {
      const { session } = action;
      return session;
    }
    default:
      return state;
  }
};

export default sessionReducer;
