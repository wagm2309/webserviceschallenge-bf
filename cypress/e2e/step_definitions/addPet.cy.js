import {
    Given,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  Given('Enviar metodo Post a Pet',()=>{
    cy.request({
      method: "POST",
      url: "https://petstore.swagger.io/v2/pet",
      body: {
          "id": 2233,
          "category": {
            "id": 2233,
            "name": "Perro"
          },
          "name": "Sandy",
          "photoUrls": [
            "string"
          ],
          "tags": [
            {
              "id": 2233,
              "name": "Sandy"
            }
          ],
          "status": "available"
        }
  }).then(response =>{
      let datos
      datos = JSON.parse(JSON.stringify(response.body))
      cy.log(datos)
      expect (response.status).to.eql(200)
      expect(datos).has.property("id",2233)
      expect(datos).has.property("name","Sandy")
      expect(datos).has.property("status","available")
  })

})
  
  Then('Pet agregada de forma exitosa',()=>{
  cy.log ("Resultado del test es el esperado")
})