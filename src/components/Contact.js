import React from 'react';
import {
  Box,
  Stack,
  Text,
  Badge,
  Popover,
  PopoverTrigger,
  DarkMode,
  PopoverContent,
  Avatar,
  Icon,
} from '@chakra-ui/core';
import img from './img/imgg.jpg';
import { connect } from 'react-redux';
import { deleteContact } from '../store/actions';
import { Link } from 'react-router-dom';

const Contact = ({ contact, deleteContact }) => {
  let data = '';
  if (contact.group === 'family') {
    data = 'red';
  } else if (contact.group === 'friend') {
    data = 'teal';
  } else {
    data = 'orange';
  }

  const handledelete = () => {
    deleteContact(contact.id);
  };

  // console.log(contact);
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Box
          w="350px"
          rounded="10px"
          overflow="hidden"
          boxShadow="md"
          bg="#c9e4ca"
        >
          <Box p={5}>
            <Stack>
              <Stack isInline align="center">
                <Text>Name: {contact.name}</Text>
                <Badge
                  variant="solid"
                  variantColor={data}
                  rounded="full"
                  px={2}
                >
                  {contact.group}
                </Badge>
              </Stack>
              <Text>Contact Number: {contact.number} </Text>
              <Text>Email: {contact.email} </Text>
            </Stack>
            <Stack isInline ml="80%">
              <Icon
                name="delete"
                size="26px"
                color="red.500"
                onClick={handledelete}
              />
              <Link to={'/edit/' + contact.id}>
                <Icon name="edit" size="26px" color="blue.500" />
              </Link>
            </Stack>
          </Box>
        </Box>
      </PopoverTrigger>

      <DarkMode>
        <PopoverContent border="0" zIndex={4} width="300px" color="white">
          <Box p={5}>
            <Avatar name="user" src={img} />
            <Text mt={4} fontWeight="bold">
              {contact.name}
              <Badge ml={3} fontSize="xs" variantColor={data}>
                {contact.group}
              </Badge>
            </Text>
            <Text mt={3}>
              {contact.name} is a amazing {contact.group} of yours.
            </Text>
          </Box>
        </PopoverContent>
      </DarkMode>
    </Popover>

    // <Box w="350px" rounded="10px" overflow="hidden" boxShadow="md" bg="#c9e4ca">
    //   <Box p={5}>
    //     <Stack>
    //       <Stack isInline align="center">
    //         <Text>Name: {contact.name}</Text>
    //         <Badge variant="solid" variantColor={data} rounded="full" px={2}>
    //           {contact.group}
    //         </Badge>
    //       </Stack>
    //       <Text>Contact Number: {contact.number} </Text>
    //       <Text>Email: {contact.email} </Text>
    //     </Stack>
    //   </Box>
    // </Box>
  );
};

const mapDispatchToProps = {
  deleteContact: deleteContact,
};

export default connect(null, mapDispatchToProps)(Contact);
