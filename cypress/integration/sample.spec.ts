const loopCount = 50;

describe('sample', function () {
  it('clicks the button', function () {
    cy.visit('/');
    cy.task('timing', `click the button ${loopCount} times`);
    for (let i=1; i<=loopCount; i++) {
      cy.get('button.foo').click();
      cy.get('div.text').should('have.text', `clicked ${i} time(s)`);
    }
    cy.task('timing');
  });
});
