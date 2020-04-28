import React from 'react';
import './App.css';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EditContact from './components/EditContact';
import Family from './components/Family';
import Customer from './components/Customer';
import Friends from './components/Friends';

function App() {
  return (
    <React.Fragment>
      <ThemeProvider>
        <CSSReset />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/edit/:id" component={EditContact} />
            <Route path="/family" component={Family} />
            <Route path="/customer" component={Customer} />
            <Route path="/friends" component={Friends} />
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
