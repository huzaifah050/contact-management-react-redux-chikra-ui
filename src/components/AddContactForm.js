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
} from '@chakra-ui/core';
import { connect } from 'react-redux';
import { addContact } from '../store/actions';

class AddContactForm extends Component {
  state = {
    name: '',
    email: '',
    number: '',
    friend: '',
    family: '',
    customer: '',
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
    this.props.addContact(this.state);
    // console.log(this.state);

    this.setState({
      name: '',
      email: '',
      number: '',
      friend: '',
      family: '',
      customer: '',
    });
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
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
              Add Contact
            </Button>
          </Stack>
        </form>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  addContact: addContact,
};

export default connect(null, mapDispatchToProps)(AddContactForm);
