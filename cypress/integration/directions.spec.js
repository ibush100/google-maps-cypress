describe('Directions Spec ', ()=>{
    before(function() {
        cy.visit('https://www.google.com/maps/preview');
        cy.url().should('include', "https");
        cy.url().should('include', 'google');
        
    });
    it('Should display driving route options', function() {
        
        cy.get('#searchbox-directions').click();
        cy.get('#sb_ifc51').type('Philadelphia, PA');
        cy.get('#sb_ifc52').type('San Francisco, CA');
        cy.get('#sb_ifc52').type(`{enter}`);
        cy.get('#section-directions-trip-1').should('be.visible');
      });

});