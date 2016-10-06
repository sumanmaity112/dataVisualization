var papa = require('papaparse');
var fs = require('fs');
var text = fs.readFileSync('data/mortality_data.csv','utf8');
var parsedData = papa.parse(text).data;

module.exports = {parsedData:parsedData};