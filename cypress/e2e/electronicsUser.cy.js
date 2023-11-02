describe("Electronics User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it(" a user can find link on home page which redirects to the few products and can add them to the cart", () => {
    cy.getByData("Electronics").click();
    cy.location("pathname").should("equal", "/Electronics");
    cy.getByData("image")
      .find("img")
      .eq(5)
      .should("have.attr", "alt", "MacBook Pro");
    cy.getByData("text").contains("MacBook Pro");
    cy.getByData("price").eq(5).contains("1749/-");
    cy.getByData("clickButton").find("button").contains("Add to Cart").click();
    cy.getByData("home").contains("Home").click();
    cy.location("pathname").should("equal", "/");
    cy.getByData("cart").click();
    cy.location("pathname").should("equal", "/cart");
    cy.getByData("home").contains("Home").click();
    cy.location("pathname").should("equal", "/");
  });
});
