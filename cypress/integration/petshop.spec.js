describe('JPETStore', function () {

    beforeEach(function () {
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
    })

    context('dado que faço o login ', () => {
        beforeEach(() => {

            cy.contains('Sign In').click()
            cy.get('[name=username]').type('admin')
            cy.get('[name="password"]')
                .clear()
                .type('admin')
            cy.contains('Login').click()

        });

        context('dado que acessa a pagina do cachorro', () => {
            beforeEach(function () {
                cy.visit('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=DOGS')
            })

            context('dado que escolha a raça do cão', () => {
                beforeEach(function () {
                    cy.contains('K9-CW-01').click()
                })
                context('comprar cachorro macho ', () => {
                    it('entao escolha a categoria de cachorro macho', () => {
                        cy.contains('EST-26').click()

                        cy.contains('Add to Cart').click()

                        cy.get(':nth-child(5) > input')
                            .clear()
                            .type('2')
                        cy.contains('Update Cart').click()
                        cy.contains('Proceed to Checkout').click()
                        cy.contains('Continue').click()
                        cy.contains('Confirm').click()
                    });
                context('comprar cachorro femea',() => {
                       it('entao escolha a categoria de cachorro femea',() =>{
                           cy.contains('EST-27').click()
                           cy.contains('Add to Cart').click()
                           cy.get(':nth-child(5) > input')
                              .clear()
                              .type('2')
                           cy.contains('Update Cart').click()
                           cy.contains('Proceed to Checkout').click()
                           cy.contains('Continue').click()
                           cy.contains('Confirm').click()
                        })     

                context('comprar um cachorro femea e um macho',() =>{
                        it.only('entao compre um cachorro femea e um  macho',()=>{
                            cy.get(':nth-child(2) > :nth-child(5) > .Button').click()
                            cy.visit('https://petstore.octoperf.com/actions/Catalog.action?viewCategory=&categoryId=DOGS')
                            cy.contains('K9-CW-01').click()
                            cy.get(':nth-child(3) > :nth-child(5) > .Button').click()
                            cy.contains('Proceed to Checkout').click()
                            cy.contains('Continue').click()
                            cy.contains('Confirm').click()
                           
                           
                        })
                    })   
                    })

                });

            })
        })
    })

})
