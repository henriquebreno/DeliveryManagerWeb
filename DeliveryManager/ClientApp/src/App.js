import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchCardapio } from './components/FetchCardapio';
import { FetchClient } from './components/FetchClient';
import { AddClient } from './components/AddClient';
import { AddCardapio } from './components/AddCardapio';
import { DashBoard } from './components/DashBoard';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={DashBoard} />
        <Route path='/fetchclient' component={FetchClient} />
        <Route path='/fetchcardapio' component={FetchCardapio} />
        <Route path='/addclient' component={AddClient} />
        <Route path='/addcardapio' component={AddCardapio} />
        <Route path='/Clientes/Edit/:clientId' component={AddClient} />
        <Route path='/Cardapios/Edit/:cardapioId' component={AddCardapio} />
      </Layout>
    );
  }
}
