import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { SimpleGrid, Text, Icon } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

class Family extends Component {
  render() {
    console.log(this.props);
    const contactList = this.props.contacts ? (
      this.props.contacts.map((contact) => {
        if (contact.group === 'customer') {
          return <Contact contact={contact} key={contact.id} />;
        }
      })
    ) : (
      <div className="">You have no</div>
    );

    return (
      <React.Fragment>
        <Link to="/">
          <Icon name="chevron-left" size="32px" color="blue.500" />
        </Link>
        <Text
          fontSize="4xl"
          bg="gray.100"
          p={5}
          w="23%"
          mt={6}
          ml={6}
          borderRadius={30}
          color="gray.500"
        >
          Your Customers
        </Text>
        <div className="mini-container">
          <SimpleGrid columns={3} spacing={10}>
            {contactList}
          </SimpleGrid>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(Family);
