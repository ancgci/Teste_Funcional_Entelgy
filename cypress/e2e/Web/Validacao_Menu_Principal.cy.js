describe('RT-Menu de Navegação Principal', function() {
    beforeEach(() => {
      // Abre a pagina inicial a antes de cada teste
    cy.visit('https://www.entelgy.com.br/')
    })

    it('1 Caso de Teste: Validar a página inicial', function() {
        // Adicionamos tempo para o carregamento devido da pagina e clicamos no icone da "Entelgy" no canto superior a esquerda
        cy.get('.logo > img', { timeout: 10000 }).should('be.visible').click()
        // Validamos o texto de "Accelerating the change. Fast"
        cy.get('.title-heading', { timeout: 10000 }).should("have.text", "Accelerating the change. Fast")
    })

    it('2 Caso de Teste: Validar a página "Quem Somos"', function() {
        //  Adicionamos tempo para o carregamento devido da pagina e clicamos no menu de navegação "Quem Somos"
        cy.get('#layout_5 > .dropdown-toggle', { timeout: 10000 }).should('be.visible').click()
        // Validamos o texto de "Entelgy no mundo"
        cy.get('.py-7 > h2', { timeout: 10000 }).should("have.text" ,"Entelgy no mundo")
    })

    it('3 Caso de Teste: Validar a página "Divisões"', function() {
        //  Adicionamos tempo para o carregamento devido da pagina e clicamos no menu de navegação "Divisões"
        cy.get('#layout_10 > .dropdown-toggle', { timeout: 10000 }).should('be.visible').click()
        // Validamos o texto de "Conheça melhor nossos diferenciais e como podemos iniciar esta jornada juntos!"
        cy.get('.py-4 > .black',{ timeout: 10000 }).should("have.text" ,"Conheça melhor nossos diferenciais e como podemos iniciar esta jornada juntos!")
    })

    it('4 Caso de Teste: Validar a página "Soluções"', function() {
        //  Adicionamos tempo para o carregamento devido da pagina e clicamos no menu de navegação "Soluções"
        cy.get('#layout_21 > .dropdown-toggle' , { timeout: 10000 }).should('be.visible').click()
        // Validamos o texto de "Soluções"
        cy.get('.jumbotron-header > h1' , { timeout: 10000 }).should("have.text" ,"Soluções")
    })

    it('5 Caso de Teste: Validar a página "Alianças"', function() {
        //  Adicionamos tempo para o carregamento devido da pagina e clicamos no menu de navegação "Alianças"
        cy.get('#layout_18 > .dropdown-toggle' , { timeout: 10000 }).should('be.visible').click()
        // Validamos o texto de "Alianças"
        cy.get('.jumbotron-header > h1' , { timeout: 10000 }).should("have.text" ,"Alianças")
    })

    it('6 Caso de Teste: Validar a página "Venha-ser-um-Entelgeer"', function() {
        //  Adicionamos tempo para o carregamento devido da pagina e clicamos no menu de navegação "Venha-ser-um-Entelgeer"
        cy.get('#layout_12 > .dropdown-toggle', { timeout: 10000 }).should('be.visible').click()
        // Validamos o texto de "Alcance as suas metas com a Entelgy!"
        cy.get(':nth-child(1) > h3.black' ,{ timeout: 10000 }).should("have.text" , "Alcance as suas metas com a Entelgy!")
    })

    it('7 Caso de Teste: Validar a página "Blog"', function() {
        //  Adicionamos tempo para o carregamento devido da pagina e clicamos no menu de navegação "Blog"
        cy.get('#layout_33 > .dropdown-toggle', { timeout: 10000 }).should('be.visible').click()
        // Validamos o texto de "Blog"
        cy.get('.jumbotron-header > h1' ,{ timeout: 10000 }).should("have.text" , "Blog") 
    })

    it('8 Caso de Teste: Validar a página "Contatos"', function() {
        //  Adicionamos tempo para o carregamento devido da pagina e clicamos no menu de navegação "Contatos"
        cy.get('#layout_4 > .dropdown-toggle', { timeout: 10000 }).should('be.visible').click()
        // Validamos o texto de "Entre em contato com a gente!"
        cy.get('.subtitle' ,{ timeout: 10000 }).should("have.text" , "Entre em contato com a gente!")
    })

     // Interceptando erros de JavaScript para que os testes não falhem por causa deles devido a oportunidade no script do site
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })



})
