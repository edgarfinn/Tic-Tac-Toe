export default (state = 'crosses', action) => {
  switch (action.type) {
    case 'HANDLE_TURN':
      if (state === 'crosses') {
        return 'noughts';
      } return 'crosses';
    default:
      return state;
  }
};
