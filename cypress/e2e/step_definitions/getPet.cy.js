import {
    Given,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  Given('Metodo Get a Pet',()=>{
    cy.request({
        method: "GET",
        url: "https://petstore.swagger.io/v2/pet/1000"
    }).then(response =>{
        let datos
        datos = JSON.parse(JSON.stringify(response.body))
        cy.log(datos)
        expect (response.status).to.eql(200)
        expect(datos).has.property("id",1000)
        expect(datos).has.property("name","T-Rex")
        expect(datos).has.property("status","available")
    })  
    
  })

  Then('Resultado del GET es el esperado',()=>{
    cy.log ("Resultado del test es el esperado")
  })
  