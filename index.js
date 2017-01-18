var _ = require('lodash')
var webpage = require('webpage')
//var page = require('webpage').create(),
var system = require('system'),
  t ;
var fs = require('fs');
var Promise = require('promise-polyfill');

var content = fs.read('siteList.csv');
var addresses = content.split("\n");





function testLoading (address,resolve) {
  return new Promise(function(resolve, reject) {
    result={}

    address = address.replace(/\r|\n/g,'');
    result.requestsTable = []
    t = Date.now();
    page = webpage.create();

    page.onResourceRequested = function(request) {
      if(_.includes(request.url,"zebestof")){
        //console.log(request.url,"onResourceRequested");
        result.requestsTable.push({
                                "url":request.url,
                                "time":Date.now() - t
                            })
      }
    };

    page.onResourceReceived = function(response) {
      if(_.includes(response.url,"zebestof")){
        //console.log(response.url,"onResourceReceived");
        for (var i = 0;i < result.requestsTable.length;i++) {
          //console.log(_.includes(result.requestsTable[i].url,response.url));
          if(_.includes(result.requestsTable[i].url,response.url)){
            result.requestsTable[i].response = {"url":response.url,"time":Date.now() - t}
          }
        }
      }
    };

    page.open(address, function(status) {
      if (status !== 'success') {
        console.log('FAIL to load the address : ',address);
      } else {
        var obj = {}
        obj[address] = []
        obj[address].push(result)
        obj[address].push({"startLoading":t});
        //t = Date.now() - t;
        //console.log('Loading ' + address);
        //console.log('Loading time ' + t + ' msec');
        setTimeout(resolve(obj),5000)
        //console.log("supose to be at the end");
      }
    });

  });
}

var urlList = {};
Promise.all(addresses.map(testLoading)).then(function (results) {
  console.log(JSON.stringify(results));
  phantom.exit();
});
