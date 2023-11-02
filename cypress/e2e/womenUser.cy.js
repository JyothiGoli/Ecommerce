describe("Women User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it(" a user can find link on home page which redirects to the few products and can add them to the cart", () => {
    cy.getByData("Women").click();
    cy.location("pathname").should("equal", "/Women");
    cy.getByData("image")
      .find("img")
      .eq(1)
      .should("have.attr", "alt", "Sneaker shoes");
    cy.getByData("text").contains("Sneaker shoes");
    cy.getByData("price").eq(1).contains("1120/-");
    cy.getByData("clickButton").find("button").contains("Add to Cart").click();
    cy.getByData("home").contains("Home").click();
    cy.location("pathname").should("equal", "/");
    cy.getByData("cart").click();
    cy.location("pathname").should("equal", "/cart");
    cy.getByData("home").contains("Home").click();
    cy.location("pathname").should("equal", "/");
  });
});
