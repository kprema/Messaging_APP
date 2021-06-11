const msgDefaultState = ['Hi', 'How are you'];

export const addmsgReducer = (state = msgDefaultState, action) => {
  console.log(state);
  switch (action.type) {
    case 'ADD_MSG':
      localStorage.setItem('msg', JSON.stringify([...state, action.data]));
      return [...state, action.data.values.message];
    default:
      return state;
  }
};

export default addmsgReducer;
