import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from '@chakra-ui/core';

const Breadcrum = () => {
  return (
    <Breadcrumb
      spacing="8px"
      m={6}
      fontSize={25}
      separator={<Icon color="gray.300" name="chevron-right" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">All Contacts</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/about">About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrum;
