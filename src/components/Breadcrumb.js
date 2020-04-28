import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const Breadcrum = ({ data }) => {
  console.log(data);
  return (
    <Breadcrumb
      spacing="8px"
      m={6}
      fontSize={25}
      separator={<Icon color="gray.300" name="chevron-right" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to="/">
          All Contacts
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink>{data}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrum;
