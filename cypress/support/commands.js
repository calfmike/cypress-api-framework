// Custom command: obtiene un token de auth y lo devuelve.
// Uso: cy.getAuthToken().then((token) => { ... })
Cypress.Commands.add("getAuthToken", () => {
  return cy.fixture("credentials").then((credentials) => {
    return cy.request("POST", "/auth", credentials).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property("token");
      return res.body.token;
    });
  });
});

// Custom command: crea un booking y devuelve su id.
// Uso: cy.createBooking(bookingData).then((id) => { ... })
Cypress.Commands.add("createBooking", (bookingData) => {
  return cy.request("POST", "/booking", bookingData).then((res) => {
    expect(res.status).to.eq(200);
    expect(res.body).to.have.property("bookingid");
    return res.body.bookingid;
  });
});
