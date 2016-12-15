var _ = require('lodash')
var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Usage: loadspeed.js <some URL>');
  phantom.exit();
}

//t = Date.now();
address = system.args[1];
console.log(address);
page.onResourceRequested = function(request) {
  if(_.includes(request.url,"zebestof")){
    console.log('\nRequest ' + JSON.stringify(request.url, undefined, 4));
  }
};
page.onResourceReceived = function(response) {
  if(_.includes(response.url,"zebestof")){
    console.log('\nReceive ' + JSON.stringify(response.url, undefined, 4));
  }
};

page.open(address, function(status) {
  if (status !== 'success') {
    console.log('FAIL to load the address'+status);
  } else {
    t = Date.now() - t;
    console.log('Loading ' + system.args[1]);
    console.log('Loading time ' + t + ' msec');
  }

  phantom.exit();

});
