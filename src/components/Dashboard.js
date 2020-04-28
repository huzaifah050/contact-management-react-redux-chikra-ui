import React from 'react';
import Breadcrum from './Breadcrumb';
import Display from './Display';
import SideToggle from './SideToggle';

const Dashboard = () => {
  return (
    <React.Fragment>
      <Breadcrum />

      <div className="container">
        <div className="display">
          <Display />
        </div>
        <div className="toggle">
          <SideToggle />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
