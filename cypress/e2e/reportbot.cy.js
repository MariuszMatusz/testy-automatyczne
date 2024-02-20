/// <reference types="cypress" />
import BaseSteam from "../pages/BaseSteam";
import {steamLogin, steamPasswd} from "../fixtures/loginDate.json";



describe("System reportujący graczy", () => {
    it("Przechodzimy do strony logowania", () => {
        BaseSteam.steamLoginPage();
        cy.url().should("include", "/openid/loginform/")
    });

    it("System logowania", () => {
        cy.steamLogin(steamLogin, steamPasswd);
        //login
        // cy.get('input.newlogindialog_TextInput_2eKVn:first').type("ziomeczek12393");
        // cy.get('input.newlogindialog_TextInput_2eKVn:first').should("have.value", "ziomeczek12393")
        // cy.get('input[type="password"]').type("QwePoiZxc123!");
        // cy.get('input[type="password"]').should("have.value", "QwePoiZxc123!");
        // cy.get("button.newlogindialog_SubmitButton_2QgFE").click();
        cy.wait(2000);
    });
    
    it("System zgłaszania gracza", () => {
        BaseSteam.reportUserPage();
        cy.url().should("include", "/profiles/76561199533094934/")

        cy.get("#profile_action_dropdown_link").click();
        // cy.get("div.popup_menu").select("Report Player");
        cy.contains("Report Player").click();
        // cy.contains("Oszukuje w grze").click();
        cy.get("div.action_btn_ctn:last-child").click();
        cy.get("#report_button").click();
        cy.get("#report_txt_input").type("Cheating in Counter Strike 2");
        cy.get("div.game_button_label").click();
        


    })

 })