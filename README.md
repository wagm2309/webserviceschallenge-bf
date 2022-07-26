# webserviceschallenge-bf

Pruebas realizadas de acuerdo a documentación de api https://petstore.swagger.io/

Para ejecutar las pruebas es necesario contar con la versión 10 de cypress. La misma se puede instalar con la instrucción: npm cypress install --save-dev

Ademas contar con la ultima versión estable de Node.js. La misma se puede descargar desde la Web: https://nodejs.org/es/

Se debe contar con la configuración de Cucumber dentro del IDE. Para lo cual adjunto link de repositorio para la configuración de la herramienta con la nueva versión de Cypress: https://github.com/bahmutov/cypress-esbuild-preprocessor

Tener en cuenta en la ejecución del Test Case cypress\e2e\step_definitions\registro.cy.js, que se debe cambiar el usuario en el Feature: cypress\e2e\features\registro.feature a fin de realizar el registro de forma exitosa.

Para generar los reportes, se debe ejecutar el comando: node .\cucumber-html-report.js

Los resportes se encuentran dentro del proyecto en la ruta: reports\cucumber-htmlreport.html\index.html
