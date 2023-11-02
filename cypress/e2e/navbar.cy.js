describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002");
  });
  it("links on the navbar are working are not", () => {
    cy.getByData("home").contains("Home").click();
    cy.getByData("cart").click();
    cy.getByData("home").contains("Home").click();
  });
});
