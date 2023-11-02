describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("check whether heading is correct or not", () => {
    cy.get("h5").contains("Choose your style..!!");
    cy.get("[data-test='home']").contains("Home").click();
    cy.get("[data-test='cart']").click();
    // cy.get("a");
  });
});
