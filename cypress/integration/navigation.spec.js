const slideContent = () => cy.get('.present')

describe('Navigation', () => {
    describe('Directions', () => {
        beforeEach(() => {
            cy.slide(3)
        })

        it('should navigate left', () => {
            cy.navigate('left')
            slideContent().should('contain', 'Agenda')
        })

        it('should navigate right', () => {
            cy.navigate('right')
            slideContent().should('contain', 'Selenium')
        })

        it('should navigate down', () => {
            cy.navigate('down')
            slideContent().should('contain', 'Anforderungen von UIs')
        })

        it('should navigate up', () => {
            cy.navigate('down')
            slideContent().should('contain', 'Anforderungen von UIs')
            cy.navigate('up')
            slideContent().should('contain', 'Anforderungen')
        })
    })

    describe('Main Level', () => {
        it('should have a start slide', () => {
            cy.slide(0)
            slideContent().should('contain', 'Integrationstests mit Cypress')
        })
    
        it('should have a profile slide', () => {
            cy.slide(1)
            slideContent().should('contain', 'Alexander Heimbuch')
        })
    
        it('should have a slide called "Agenda"', () => {
            cy.slide(2)
            slideContent().should('contain', 'Agenda')
        })
    
        it('should have a slide called "1. Anforderungen"', () => {
            cy.slide(3)
            slideContent().should('contain', '1. Anforderungen')
        })
    
        it('should have a slide called "2. Selenium"', () => {
            cy.slide(4)
            slideContent().should('contain', '2. Selenium')
        })
    
        it('should have a slide called "3. Cypress"', () => {
            cy.slide(5)
            slideContent().should('contain', '3. Cypress')
        })
    
        it('should have a slide called "4. Demo!"', () => {
            cy.slide(6)
            slideContent().should('contain', '4. Demo!')
        })
    
        it('should have a slide called "5. Tradeoffs"', () => {
            cy.slide(7)
            slideContent().should('contain', '5. Tradeoffs')
        })
    })



})