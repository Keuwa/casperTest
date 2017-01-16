var _ = require('lodash')
var page = require('webpage').create(),
  system = require('system'),
  t ;
 var fs = require('fs');

var content = fs.read('siteList.csv');
var addresses = content.split("\n");


var urlList = {};

console.log("heys");





function testLoading (address, resolve) {
  // address = address.replace(/\r|\n/g,'');
  //
  // console.log("adress : ", JSON.stringify(address));
  // urlList[address]=[]
  // urlList[address].requestsTable = []
  //
  // t = Date.now();
  //
  // page.onResourceRequested = function(request) {
  //   if(_.includes(request.url,"zebestof")){
  //     urlList[address].requestsTable.push({
  //                             "url":request.url,
  //                             "time":Date.now()
  //                         })
  //   }
  // };
  //
  // page.onResourceReceived = function(response) {
  //   if(_.includes(response.url,"zebestof")){
  //     for (var i = 0;i < urlList[address].requestsTable.length;i++) {
  //       if(_.includes(urlList[address].requestsTable[i].url,response.url)){
  //         urlList[address].requestsTable[i].response = {"url":response.url,"time":Date.now()}
  //         console.log("received:",JSON.stringify(urlList[address].requestsTable));
  //       }
  //     }
  //   }
  // };
  //
  // page.open(address, function(status) {
  //   if (status !== 'success') {
  //     console.log('FAIL to load the address '+status);
  //   } else {
  //     t = Date.now() - t;
  //     console.log('Loading ' + address);
  //     console.log('Loading time ' + t + ' msec');
  //   }
  //   phantom.exit();
  //   resolve();
  // });
}


var promises[];

for(i in addresses){
  promises.push(new Promise(function(resolve, reject) {
    testLoading(adresses[i]),resolve)
  });
}

Promise.all(promises).then((valeurs) => {
  console.log(valeurs);
  console.log("\n\n\n yolo : ",JSON.stringify(urlList));
}, (raison) => {
  console.log(raison)
});
