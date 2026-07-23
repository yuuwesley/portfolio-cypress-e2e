// cypress/e2e/03-checkout.cy.js

describe('Módulo de Checkout E2E - SauceDemo', () => {

  beforeEach(() => {
    cy.fixture('usuarios').then((massa) => {
      // Usa o comando customizado para um setup rápido do estado do teste
      cy.fazerLogin(massa.usuarioValido.username, massa.usuarioValido.password);
    });
  });

  it('Deve realizar compra E2E e validar o cálculo do valor total com taxa/imposto', () => {
    // 1. Adiciona o produto e navega até o checkout
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();

    // 2. Preenche os dados de envio
    cy.get('[data-test="firstName"]').type('Wesley');
    cy.get('[data-test="lastName"]').type('Dias');
    cy.get('[data-test="postalCode"]').type('09300000');
    cy.get('[data-test="continue"]').click();

    // 3. VALIDAÇÃO AVANÇADA: Cálculo Numérico de Subtotal + Imposto = Total
    cy.get('.summary_subtotal_label').invoke('text').then((subtotalTexto) => {
      cy.get('.summary_tax_label').invoke('text').then((impostoTexto) => {
        cy.get('.summary_total_label').invoke('text').then((totalTexto) => {

          // Extrai apenas os números das strings (ex: "Item total: $29.99" -> 29.99)
          const subtotal = parseFloat(subtotalTexto.replace('Item total: $', ''));
          const imposto = parseFloat(impostoTexto.replace('Tax: $', ''));
          const totalExibido = parseFloat(totalTexto.replace('Total: $', ''));

          // Asserção Matemática
          const totalCalculado = subtotal + imposto;
          expect(totalExibido).to.equal(totalCalculado);
        });
      });
    });

    // 4. Finaliza a compra e valida a mensagem do sistema
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-header').should('have.text', 'Thank you for your order!');
  });

});