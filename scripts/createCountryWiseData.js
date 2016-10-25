var fs = require("fs");
var papa = require('papaparse');

var createCountryWiseData = function (sourceFileName, destFileName) {
    var result = {};
    var text = (fs.readFileSync(sourceFileName, 'utf8'));
    var data = papa.parse(text).data;
    var fields = data.shift();
    data.forEach(function (entry) {
        var countryWiseData = {};
        for (var index = 1; index < entry.length; index++) {
            countryWiseData[fields[index]] = entry[index];
        }
        result[entry[0]] = countryWiseData;
    });
    fs.writeFileSync(destFileName, JSON.stringify(result));
};

createCountryWiseData("data/result.csv", "data/countryWiseData.json");