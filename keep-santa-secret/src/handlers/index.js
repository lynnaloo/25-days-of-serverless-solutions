/* eslint-disable shopify/prefer-early-return */

module.exports.saveGift = async function(context, req) {
  context.log('Github hook was initiated');
  const fileList = [];

  if (req.body && req.body.commits && req.body.commits.length > 0) {
    const commits = req.body.commits;
    const timestamp = Date.now();

    commits.forEach((commit) => {
      if ((commit.added && commit.added.length > 0) || (commit.modified && commit.modified.length > 0)) {
        const files = [];
        files.push(commit.added);
        files.push(commit.modified);

        files.forEach((file) => {
          if (file.endsWith('.png')) {
            const output = JSON.stringify({
              file,
              timestamp
            });
            fileList.push(output);
          }
        });
      }
    });

    context.bindings.outputTable = fileList;
    context.res = {
      // status: 200, /* Defaults to 200 */
      body: `Commits analyzed ${fileList.toString()}`
    };
  }

  context.res = {
    status: 400,
    body: 'There were no commits to analyze.'
  };
};
