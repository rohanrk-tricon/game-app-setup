import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('renders app to check if it contains Body', () => {
  mount(<App />);
  cy.get('.body').contains('Body');
});

it('renders app to check if it contains Hello', () => {
  mount(<App />);
  cy.get('.hello').contains('Hello');
});