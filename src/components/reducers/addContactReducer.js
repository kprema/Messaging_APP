const contactsDefaultState = [];

const addContactReducer = (state = contactsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      localStorage.setItem('contacts', JSON.stringify([...state, action.data]));
      return [...state, action.data];

    case 'POPULATE_CONTACTS':
      return action.data;

    default:
      return state;
  }
};

export default addContactReducer;
