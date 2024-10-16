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

  })