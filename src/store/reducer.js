import uuid from 'react-uuid';

const initState = {
  contacts: [
    {
      name: 'Huzaifah Yusif-Attah',
      email: 'hhuzaifah050@gmail.com',
      id: '1',
      number: '0549798150',
      group: 'customer',
    },
    // {
    //   name: 'Huzaifah',
    //   email: 'hhuzaifah050@gmail.com',
    //   id: '2',
    //   number: '0549798150',
    //   group: 'customer',
    // },
    // {
    //   name: 'Huzaifah',
    //   email: 'hhuzaifah050@gmail.com',
    //   id: '3',
    //   number: '0549798150',
    //   group: 'customer',
    // },
    // {
    //   name: 'Huzaifah',
    //   email: 'hhuzaifah050@gmail.com',
    //   id: '4',
    //   number: '0549798150',
    //   group: 'customer',
    // },
    // {
    //   name: 'Huzaifah',
    //   email: 'hhuzaifah050@gmail.com',
    //   id: '5',
    //   number: '0549798150',
    //   group: 'customer',
    // },
    // {
    //   name: 'Huzaifah',
    //   email: 'hhuzaifah050@gmail.com',
    //   id: '6',
    //   number: '0549798150',
    //   group: 'customer',
    // },
    // {
    //   name: 'Huzaifah',
    //   email: 'hhuzaifah050@gmail.com',
    //   id: '7',
    //   number: '0549798150',
    //   group: 'customer',
    // },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      let data = '';
      if (action.payload.family) {
        data = 'family';
      } else if (action.payload.customer) {
        data = 'customer';
      } else {
        data = 'friend';
      }
      const newContact = {
        name: action.payload.name,
        email: action.payload.email,
        id: uuid(),
        number: action.payload.number,
        group: data,
      };
      return {
        ...state,
        contacts: [...state.contacts, newContact],
      };

    case 'DELETE_CONTACT':
      const filteredContacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: filteredContacts,
      };

    case 'EDIT_CONTACT':
      const updatedContactInfo = state.contacts.map((contact) => {
        if (contact.id === action.id) {
          return { ...contact, ...action.updatedContact };
        } else {
          return contact;
        }
      });
      return { ...state, contacts: updatedContactInfo };
    default:
      return state;
  }
};

export default reducer;
