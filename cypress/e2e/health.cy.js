describe("Restful-Booker - Health check", () => {
  it("GET /ping debe responder 201", () => {
    cy.request("GET", "/ping").then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});
