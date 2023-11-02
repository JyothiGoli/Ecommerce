describe("main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002");
  });
  context("Home part", () => {
    it("the heading contains valid text", () => {
      cy.getByData("home").find("h5").contains("Choose your style..!!");
    });
  });
  context("Product part", () => {
    it("Electronics is navigating to correct url", () => {
      cy.getByData("Electronics").click();
      cy.getByData("home").contains("Home").click();
    });
    it("Women is navigating to correct url", () => {
      cy.getByData("Women").click();
      cy.getByData("home").contains("Home").click();
    });
    it("Men is navigating to correct url", () => {
      cy.getByData("Men").click();
      cy.getByData("home").contains("Home").click();
    });
  });
});
