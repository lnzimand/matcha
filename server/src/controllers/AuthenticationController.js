module.exports = {
    register (request, response) {
      response.send({
        message: `Hello ${request.body.email}!
          You're now registered, enjoy our site.`,
      });
    }
  };