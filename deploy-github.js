
var ghpages = require('gh-pages');
/**
 * This configuration will avoid logging the GH_TOKEN if there is an error.
 */
ghpages.publish('dist', {
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/simon-an/frontend-demo.git',
  branch: 'gh-pages',
  message: 'Auto-generated commit using deploy-github.js',
  silent: true
}, function (err) {/*console.log(err)*/});

