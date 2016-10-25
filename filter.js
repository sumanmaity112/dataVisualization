//var data = require('./process_data.js')();
var papa = require("papaparse");
var fs = require("fs");
var text = fs.readFileSync('data/mortality_data.csv', 'utf8');
var data = papa.parse(text).data;

var filterValidCountries = function(data){
    var totalLength = data[0].length;
    minimumNumberOfEntries = totalLength * 0.2 +1;
    return filter(minimumNumberOfEntries, data);
};

var filter = function(minimumNumberOfEntries, data){
    var validCountryData = [];
    for(var i = 0 ; i < data.length ; i++){
        if(data[i].slice(1,minimumNumberOfEntries).join("") != "")
            validCountryData.push(data[i]);
    };
    return validCountryData;
};

fs.writeFileSync("data/result.csv", papa.unparse(filterValidCountries(data)));


console.log(fs.readFileSync("data/result.csv"));
