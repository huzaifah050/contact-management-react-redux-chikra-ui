import React from 'react';
import { Box, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/core';
import DisplayGroup from './DisplayGroup';
import AddContactForm from './AddContactForm';

const SideToggle = () => {
  return (
    <Box bg="gray.200" boxShadow="md" rounded="md" px={0} overflow="hidden">
      <Tabs variant="enclosed" isFitted m={4}>
        <TabList>
          <Tab>Add New Contact</Tab>
          <Tab>Display Contact by Groups</Tab>
        </TabList>
        <TabPanels mt={4}>
          <TabPanel>
            <AddContactForm />
          </TabPanel>
          <TabPanel>
            <DisplayGroup />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SideToggle;
