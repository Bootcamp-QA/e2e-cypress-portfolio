import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  When ("the user click on github link", () => {

    //Obtenemos el elemento del enlace
    cy.get('[data-testid="githublink"]').click();

    //Hacer doble click
    //cy.get('[data-testid="githublink"]').dblclick();

    //Hacer click derecho
    //cy.get('[data-testid="githublink"]').rightclick();

  });

  When ("the user click on linkedin link", () => {

    //Obtenemos el elemento del enlace y hacemos click
    cy.get('[data-testid="linkedinlink"]').click();

  });

  Then ("the user see name {string} on header", (name) => {
    //obtener el elemento del nombre y comprueba que tiene el TEXTO EXACTO
    cy.get('[data-testid="headername"]').should('have.text',name);


  });



  Then ("the user see title contain {string} on header", (title) => {
   //obtener el elemento del titulo y comprueba que CONTIENE el texto
   cy.get('[data-testid="headertitle"]').should('contain',title);


  });


Then ("the user see github link {string}", (githublink) => {
 //obtenemos el elemento con el enlace a github y comprobamos que tiene la url de github esperada
  cy.get('[data-testid="githublink"').should('have.attr', 'href',githublink);

  });

  Then ("the user see linkedin link {string}", (linkedinlink) => {
    //obtenemos el elemento con el enlace a linkedin y comprobamos que tiene la url de linkedin esperada
    cy.get('[data-testid="linkedinlink"').should('have.attr', 'href',linkedinlink);
  
    });



