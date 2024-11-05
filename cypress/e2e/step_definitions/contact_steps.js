import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  When ("the user fill email with {string}", (email) => {
    //obtener el elemento del email y lo limpiamos (borramos el contenido si hay algo escrito)
    cy.get('[data-testid="email"]').clear();
    //rellenamos el campo email
    cy.get('[data-testid="email"]').type(email);

  });

  When ("the user select subject {string}", (subject) => {
    cy.get("[data-testid='subject']").select(subject);

  });

  When ("the user fill message with {string}", (message) => {
    cy.get("[data-testid='message'").clear();
    //rellenamos el campo con el mensaje
    cy.get("[data-testid='message'").type(message);

  });

  When ("the user check accept privacy policy", () => {
    //marcamos checkbox aceptar la policita de privacidad 
    cy.get("[data-cy='privacypolicy']").check();

  });

  When ("the user press submit button", () => {
    cy.get("[data-testid='buttonsubmitform']").click();


  });


  
 
