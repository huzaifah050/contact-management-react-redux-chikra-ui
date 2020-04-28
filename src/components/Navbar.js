import React from 'react';
import { Box, Flex, Link, Image, Text } from '@chakra-ui/core';
import img from './img/img.jpg';

function Navbar() {
  return (
    <Flex
      bg="#182825"
      w="100%"
      px={5}
      py={4}
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDirection="row" justifyContent="center" alignItems="center">
        <Image src={img} size={30} />
        <Text pl={3} color="white">
          Contact Management
        </Text>
      </Flex>
      {/* <Box color="white">
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Contact</Link>
      </Box> */}
    </Flex>
  );
}

export default Navbar;
