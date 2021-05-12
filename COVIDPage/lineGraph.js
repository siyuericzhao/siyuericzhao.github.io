
d3.csv("COVIDPage/NBARevenue2.csv", function (error, data) {


    var margin = { top: 80, right: 20, bottom: 50, left: 120 },
        height = 500 - margin.top - margin.bottom;
    var maxWidth = 860 - margin.left - margin.right;
    var width = 860 - margin.left - margin.right;

    var parseTime = d3.timeParse("%Y");
    var _x = d3.scaleTime().range([0, width]);
    var _y = d3.scaleLinear().range([height, 0]);

    var valueline = d3.line().x(function (d) {
        return _x(d.date);
    }).y(function (d) {
        return _y(d.close);
    });

    var svg = d3.select("#season-days").append('svg').attr("width", 1000).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    if (error) throw error;

    data.forEach(function (d) {
        d.date = parseTime(d.date);
        d.close = +d.close;
    });

    _x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    _y.domain([0, d3.max(data, function (d) {
        return 400;
    })]);



    svg.append("path").data([data]).attr("class", "line").attr("d", valueline)
        .style('stroke', 'blue');

    svg.append("g").attr("class", "x-axis").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(_x));

    svg.append("g").call(d3.axisLeft(_y));

    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 150)
        .attr("y", 10)
        .attr("font-size", "24px")
        .text("NBA Season Length 2011 - 2020")

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 0)
        .attr("y", -70)
        .attr("dy", ".71em")
        .attr("font-size", "20px")
        .style("text-anchor", "end")
        .text("Days");

    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 245)
        .attr("y", 420)
        .attr("font-size", "20px")
        .text("Year")


    //Add annotations
    var labels = [
        {
            data: { date: "2012", close: 180, message:  "Due to signing of a new collective bargaining agreement, " +
                    "the regular season was shortened from the normal 82 games per team to 66."},
            dy: -65,
            dx: 100,
            note: { align: "middle" }
        },{
            data: { date: "2020", close: 355, message: "The Finals ended on October 11, 2020, 355 days after the October 22, 2019, " +
                    "regular-season opening day. Because of the COVID pandemic, this season was the longest season in NBA history."},
            dy: 17,
            dx: 20,

        }
    ].map(function (l) {
        l.note = Object.assign({}, l.note, { title: "Year: " + l.data.date + " " + l.data.close + "(days)",
            label: "# of Days: " + l.data.close, label: l.data.message });
        l.subject = { radius: 5, fill: 'red' };


        return l;
    });

    var timeFormat = d3.timeFormat("%Y");

    window.makeAnnotations = d3.annotation().annotations(labels).type(d3.annotationCalloutCircle).accessors({ x: function x(d) {
            return _x(parseTime(d.date));
        },
        y: function y(d) {
            return _y(d.close);
        }
    }).accessorsInverse({
        date: function date(d) {
            return timeFormat(_x.invert(d.x));
        },
        close: function close(d) {
            return _y.invert(d.y);
        }
    }).on('subjectover', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", true);
    }).on('subjectout', function (annotation) {
        annotation.type.a.selectAll("g.annotation-connector, g.annotation-note").classed("hidden", false);
    });

    svg.append("g").attr("class", "annotation-test").call(makeAnnotations);

    svg.selectAll("g.annotation-connector, g.annotation-note").attr('id', 'annotation-graph').classed("hidden", false);
});
