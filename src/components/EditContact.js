import React, { Component } from 'react';
import {
  Stack,
  FormControl,
  InputGroup,
  Input,
  InputLeftElement,
  Icon,
  Button,
  FormHelperText,
  Radio,
  RadioGroup,
  Text,
  Box,
} from '@chakra-ui/core';
import { connect } from 'react-redux';
import { editContact } from '../store/actions';
import { Link } from 'react-router-dom';

class EditContact extends Component {
  state = {
    name: this.props.contact.name,
    email: this.props.contact.email,
    number: this.props.contact.number,
    friend: this.props.contact.friend,
    family: this.props.contact.family,
    customer: this.props.contact.customer,
  };

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'radio' ? target.checked : target.value;
    const id = target.id;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let id = this.props.contact.id;
    // console.log(this.props.contact.id);
    this.props.editContact(id, this.state);
    this.props.history.push('/');
  };

  render() {
    // console.log(this.props.contact);
    return (
      <React.Fragment>
        <Link to="/">
          <Icon name="chevron-left" size="32px" color="blue.500" />
        </Link>
        <Box mx="auto" w="400px" bg="gray.200" p={2} mt={20} borderRadius={7}>
          <form onSubmit={this.handleSubmit}>
            <Stack spacing="2">
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<Icon name="info" />} />

                  <Input
                    type="text"
                    placeholder="Name"
                    aria-label="Name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<Icon name="info" />} />

                  <Input
                    type="text"
                    placeholder="Contact Number"
                    aria-label="First Name"
                    id="number"
                    value={this.state.number}
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<Icon name="email" />} />

                  <Input
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </FormControl>

              <Text mt={1} fontWeight="semibold">
                Relation:
              </Text>
              <RadioGroup
                type="radio"
                spacing={5}
                onChange={this.handleChange}
                isInline
              >
                <Radio variantColor="red" id="family" value="family">
                  Family
                </Radio>
                <Radio variantColor="green" id="friend" value="friend">
                  Friend
                </Radio>
                <Radio variantColor="orange" id="customer" value="customer">
                  Customer
                </Radio>
              </RadioGroup>
              <FormHelperText textAlign="center">
                We will never share your data!
                <br />
                🤞
              </FormHelperText>
              <Button
                type="submit"
                boxShadow="sm"
                _hover={{ boxShadow: 'sm' }}
                _active={{ boxShadow: 'lg' }}
              >
                Update Contact
              </Button>
            </Stack>
          </form>
        </Box>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  editContact: editContact,
};

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps.match.params.id);
  // console.log(state);
  let id = ownProps.match.params.id;
  return {
    contact: state.contacts.find((contact) => contact.id === id),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
