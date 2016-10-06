var papa = require('papaparse');
var fs = require('fs');

var processData = function () {
    var text = fs.readFileSync('data/mortality_data.csv', 'utf8');
    var parsedData = papa.parse(text).data;
    var headers = parsedData[0];
    headers.shift();
    headers.pop();
    parsedData.shift();
    return convert(headers, parsedData);
};

var getCountryNames = function (data) {
    return data.map(function (entry) {
        return entry[0];
    });
};

var convert = function (headers, data) {
    var mortalityCountryWiseData = {};
    var countries = getCountryNames(data);

    countries.forEach(function (country, index) {
        mortalityCountryWiseData[country] = {};
        var information = data[index];
        headers.forEach(function (header, index) {
            mortalityCountryWiseData[country][header] = information[++index];
        });
    });
    return mortalityCountryWiseData;
};

module.exports = processData;
