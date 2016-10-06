var data = require('./process_data.js')();

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
