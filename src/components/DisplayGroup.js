import React from 'react';
import { Text, Divider } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const DisplayGroup = () => {
  return (
    <div>
      <Text as="h2" fontWeight="semibold" fontSize="xl" px={4} py={3}>
        Group Contacts as:
      </Text>
      <Divider borderColor="red.200" />
      <Link to ='/family'>
        <Text fontSize={20} px={4} py={3} bg="red.200" letterSpacing="5px">
          Family
        </Text>
      </Link>

      <Link to='/friends'>
        <Text fontSize={20} px={4} py={3} bg="teal.200" letterSpacing="5px">
          Friends
        </Text>
      </Link>

      <Link to ='/customer'> 
        <Text fontSize={20} px={4} py={3} bg="orange.400" letterSpacing="5px">
          Customers
        </Text>
      </Link>
    </div>
  );
};

export default DisplayGroup;
