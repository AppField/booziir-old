import { getGreeting } from '../support/app.po';

describe('booziir-admin', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to booziir-admin!');
  });
});
