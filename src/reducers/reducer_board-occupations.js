const occupations = {
  A1: null,
  A2: null,
  A3: null,
  B1: null,
  B2: null,
  B3: null,
  C1: null,
  C2: null,
  C3: null,
};

export default (state = occupations, action) => {
  switch (action.type) {
    case 'HANDLE_TURN':
      return action.payload;
    default:
      return state;
  }
};
