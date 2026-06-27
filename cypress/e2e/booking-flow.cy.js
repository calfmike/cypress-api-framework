describe("Restful-Booker - Flujo CRUD completo", () => {
  let booking;

  before(() => {
    cy.fixture("booking").then((data) => {
      booking = data;
    });
  });

  it("auth -> crear -> leer -> actualizar -> borrar", () => {
    cy.getAuthToken().then((token) => {
      cy.createBooking(booking).then((bookingId) => {
        // READ
        cy.request("GET", `/booking/${bookingId}`).then((getRes) => {
          expect(getRes.status).to.eq(200);
          expect(getRes.body.firstname).to.eq(booking.firstname);
          expect(getRes.body.totalprice).to.eq(booking.totalprice);
        });

        // UPDATE
        const updatedBooking = {
          ...booking,
          lastname: "Calfa Modificado",
          totalprice: 2000,
          depositpaid: false,
          additionalneeds: "Lunch",
        };
        cy.request({
          method: "PUT",
          url: `/booking/${bookingId}`,
          headers: { Cookie: `token=${token}` },
          body: updatedBooking,
        }).then((updateRes) => {
          expect(updateRes.status).to.eq(200);
          expect(updateRes.body.lastname).to.eq("Calfa Modificado");
          expect(updateRes.body.totalprice).to.eq(2000);
        });

        // DELETE
        cy.request({
          method: "DELETE",
          url: `/booking/${bookingId}`,
          headers: { Cookie: `token=${token}` },
        }).then((deleteRes) => {
          expect(deleteRes.status).to.eq(201);
        });
      });
    });
  });
});
