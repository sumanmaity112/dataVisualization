var DATA;
const WIDTH = 1000;
const HEIGHT = 700;
const MARGIN = 40;
const INNER_HEIGHT = HEIGHT - (2 * MARGIN);
const INNER_WIDTH = WIDTH - (2 * MARGIN);

var getDataByCountryName = function (countryName) {
    var data = DATA[countryName];
    var result = [];
    Object.keys(data).forEach(function (key) {
        var date = new Date();
        date.setYear(+key);
        result.push({"year": date, "rate": +data[key]});
    });
    return result;
};

var translate = function (x, y) {
    return 'translate(' + x + ', ' + y + ')';
};

var load = function (entries) {
    var xScale = d3.scaleTime()
        .domain(d3.extent(entries, function (entry) {
            return entry["year"]
        }))
        .range([0, INNER_WIDTH]);


    var yScale = d3.scaleLinear()
        .domain(d3.extent(entries, function (entry) {
            return entry["rate"]
        }))
        .range([INNER_HEIGHT, 0]);

    var line = d3.line()
        .x(function (entry) {
            return xScale(entry["year"])
        })
        .y(function (entry) {
            return yScale(entry["rate"])
        });

    var svg = d3.selectAll("#container").append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT);

    var g = svg.append("g")
        .attr('transform', translate(MARGIN, MARGIN));

    g.append("path")
        .classed("path", true)
        .attr("d", line(entries))

};

var main = function () {
    d3.json("data/countryWiseData.json", function (data) {
        DATA = data;
        var entries = getDataByCountryName("India");
        load(entries)
    });
}();

