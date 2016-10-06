var data = require('../process_data.js').parsedData;

var filter80PercentageAboveCountries = function(data){
    var totalLength = data[0].length;
    minNumberOfEntries = totalLength * 0.2 +1;
    return filter(minNumberOfEntries, data);
}

var filter = function(minNumberOfEntries, data){
    var validCountryData = []
    for(var i = 0 ; i < data.length ; i++){
        if(data[i].slice(1,minNumberOfEntries).join("") != "")
            validCountryData.push(data[i]);
    }
    return validCountryData;
}

console.log(filter80PercentageAboveCountries(data).length);