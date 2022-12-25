
const fs = require('fs');

// var fs = require('fs'),
// 	assert = require('assert'),
// 	should = require('should'),
// 	Fs_Cdn = require('../index.js'),
// 	remoteConfig = require('../config.json'),
// 	pkgcloud = require('pkgcloud'),
// 	async = require('async');

fs.readdir('..\\music\\music', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(files);
});