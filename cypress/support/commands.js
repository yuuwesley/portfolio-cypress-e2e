// cypress/support/commands.js

Cypress.Commands.add('fazerLogin', (usuario, senha) => {
  cy.visit('/');
  
  if (usuario) {
    cy.get('[data-test="username"]').type(usuario);
  }
  if (senha) {
    cy.get('[data-test="password"]').type(senha);
  }
  
  cy.get('[data-test="login-button"]').click();
});