import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import { SimpleGrid } from '@chakra-ui/core';
import Breadcrum from './Breadcrumb';

class Family extends Component {
  render() {
    let data = 'Friends';

    const contactList = this.props.contacts ? (
      this.props.contacts.map((contact) => {
        if (contact.group === 'friend') {
          return <Contact contact={contact} key={contact.id} />;
        }
      })
    ) : (
      <div className="">You have no</div>
    );

    return (
      <React.Fragment>
        <Breadcrum data={data} />
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
