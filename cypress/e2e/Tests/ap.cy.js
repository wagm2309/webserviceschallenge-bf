/// <reference types="cypress" /> 

require('cypress-plugin-tab')
require('cypress-xpath')

describe('Demo de una api',()=>{
    let datos
    let path = 1000

    it("Add Pet",()=>{
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
       
    it("Get Pet",()=>{
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

    it("Update Pet",()=>{
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
})