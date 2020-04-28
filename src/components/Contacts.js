import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { SimpleGrid } from '@chakra-ui/core';

class Contacts extends Component {
  render() {
    const contactList = this.props.contacts ? (
      this.props.contacts.map((contact) => {
        return <Contact contact={contact} key={contact.id} />;
      })
    ) : (
      <div className="">You have no</div>
    );

    return (
      <SimpleGrid columns={2} spacing={10}>
        {contactList}
      </SimpleGrid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};
export default connect(mapStateToProps)(Contacts);
