describe('Módulo de Carrinho - SauceDemo', () => {

  beforeEach(() => {
    cy.fixture('usuarios').then((massa) => {
      cy.visit('/');
      cy.get('[data-test="username"]').type(massa.usuarioValido.username);
      cy.get('[data-test="password"]').type(massa.usuarioValido.password);
      cy.get('[data-test="login-button"]').click();
    });
  });

  it('Deve adicionar um produto ao carrinho e verificar o contador', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Valida se o badge do carrinho exibe '1'
    cy.get('.shopping_cart_badge').should('be.visible').and('have.text', '1');
  });

  it('Deve remover um produto do carrinho diretamente da vitrine', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    // Valida que o badge do carrinho não existe mais
    cy.get('.shopping_cart_badge').should('not.exist');
  });

});