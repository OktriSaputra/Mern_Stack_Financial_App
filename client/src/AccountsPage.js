import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavBar from './components/AppNavBar'
import TransactionList from './components/TransactionList'
import ItemModal from './components/ItemModal'

import {Provider} from 'react-redux';
import store from './store';
import { Container} from 'reactstrap';

class AccountsPage extends Component {
  render() {
    return (
      //this allows us to share state accross components
      <Provider store={store}>
        <div className="App">
            <AppNavBar />
            <Container>
            <h1>test Financial Budgeting</h1>
            <h2>Transaction</h2>
            
          </Container>
        </div>
      </Provider>
    );
  }
}

export default AccountsPage;