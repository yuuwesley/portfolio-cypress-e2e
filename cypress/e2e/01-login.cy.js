// cypress/e2e/01-login.cy.js

describe('Módulo de Autenticação - SauceDemo', () => {

  beforeEach(() => {
    cy.fixture('usuarios').as('massa');
  });

  it('Deve realizar login com sucesso usando credenciais válidas', function () {
    cy.fazerLogin(this.massa.usuarioValido.username, this.massa.usuarioValido.password);

    // Validações
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('Deve exibir mensagem de erro ao tentar logar com usuário bloqueado', function () {
    cy.fazerLogin(this.massa.usuarioBloqueado.username, this.massa.usuarioBloqueado.password);

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Deve exibir mensagem de erro para credenciais inválidas', function () {
    cy.fazerLogin(this.massa.usuarioInvalido.username, this.massa.usuarioInvalido.password);

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Username and password do not match');
  });

});