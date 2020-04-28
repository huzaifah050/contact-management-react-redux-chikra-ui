export const addContact = (contact) => {
  return {
    type: 'ADD_CONTACT',
    payload: contact,
  };
};

export const deleteContact = (id) => {
  return {
    type: 'DELETE_CONTACT',
    payload: id,
  };
};

export const editContact = (id, updatedContact) => {
  return {
    type: 'EDIT_CONTACT',
    id: id,
    updatedContact: updatedContact,
  };
};
