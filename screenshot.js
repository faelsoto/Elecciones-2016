var system = require('system');
var args = system.args;
var page = require('webpage').create();

var url = args[1];
var output = args[2];
var viewport = args[3].split("x");

page.onLoadFinished = function(status) {
  if (status === 'success') {
    setTimeout(function() {
      page.render(output);
      return phantom.exit();
    }, 10000);

  } else {
    console.log('Connection failed.');
    phantom.exit();
  }
};

page.viewportSize = {
  width: viewport[0],
  height: viewport[1]
};

page.open(url);
