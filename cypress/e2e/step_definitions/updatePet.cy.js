import {
    Given,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  Given('Enviar metodo Put a path v2',()=>{
    cy.request({
        method: "PUT",
        url: "https://petstore.swagger.io/v2/pet",
        body: {
            "id": 2234,
            "category": {
              "id": 2234,
              "name": "Perro mediano"
            },
            "name": "Sandy Gonzalez",
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 2234,
                "name": "Sandy Gonzalez"
              }
            ],
            "status": "available"
          }
    }).then(response =>{
        let datos
        datos = JSON.parse(JSON.stringify(response.body))
        cy.log(datos)
        expect (response.status).to.eql(200)
        expect(datos).has.property("id",2234)
        expect(datos).has.property("name","Sandy Gonzalez")
        expect(datos).has.property("status","available")
    })  
})
Then('Cambios en la Pet realizados de forma exitosa',()=>{
    cy.log ("Pet modificada de forma exitosa")
})