import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  

  Given ("the user visit portfolio webpage", () => {

    //Visitar la pagina del portfolio
    cy.visit("/");

    //Recargar la pagina del portfolio
    // cy.reload();

    //Borrar las cookies. No es necesario, porque cypress por defecto las borra.
    //cy.clearCookies();

  });

 