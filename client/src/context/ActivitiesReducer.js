export default (state, action) => {
  switch (action.type) {
    case 'GET_ACTIVITIES':
      return {
        ...state,
        loading: false,
        activities: action.payload,
      };
    case 'ADD_ACTIVITY':
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    default:
      return state;
  }
};
