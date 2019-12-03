
module.exports.saveGift = async function(context, req) {
  context.log('Saving URL to database');

  context.log('JavaScript HTTP trigger function processed a request.');

  if (req.body) {
    const input = req.body;
    const timestamp = Date.now();

    const output = JSON.stringify({
      url: input.url,
      timestamp
    });
    context.bindings.record = output;
    context.log('Finish writing to CosmosDB');

    context.res = {
      // status: 200, /* Defaults to 200 */
      body: output
    };
  } else {
    context.res = {
      status: 400,
      body: 'Please pass a name on the query string or in the request body'
    };
  }
};
