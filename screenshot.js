var system = require('system');
var args = system.args;
var page = require('webpage').create();

var url = args[1];
var output = args[2];
var viewport = args[3].split("x");

page.onLoadFinished = function(status) {
  if (status === 'success') {
    page.evaluate(function() {});
    page.render(output);
    return phantom.exit();
  } else {
    console.log('Connection failed.');
    return phantom.exit();
  }
};

page.viewportSize = {
  width: viewport[0],
  height: viewport[1]
};

page.open(url);
