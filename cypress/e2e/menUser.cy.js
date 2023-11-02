describe("Men User Journey", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it(" a user can find link on home page which redirects to the few products and can add them to the cart", () => {
    cy.getByData("Men").click();
    cy.location("pathname").should("equal", "/Men");
    cy.getByData("image")
      .find("img")
      .eq(3)
      .should("have.attr", "alt", "Wrist Watch");
    cy.getByData("text").contains("Wrist Watch");
    cy.getByData("price").eq(3).contains("1060/-");
    cy.getByData("clickButton").find("button").contains("Add to Cart").click();
    cy.getByData("home").contains("Home").click();
    cy.location("pathname").should("equal", "/");
    cy.getByData("cart").click();
    cy.location("pathname").should("equal", "/cart");
    cy.getByData("home").contains("Home").click();
    cy.location("pathname").should("equal", "/");
  });
});
