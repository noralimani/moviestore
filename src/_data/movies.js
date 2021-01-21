const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN
});

module.exports = function() {
    return client.getEntries({ content_type: 'movie' })
    .then(function(response) {
      return response.items;
    })
    .catch(console.error);
  };