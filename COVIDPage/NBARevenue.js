/*
The code below is responsible for the NBA Average Operating Income by Year bar charts in the COVID Page.
*/

d3.csv("COVIDPage/NBARevenue.csv", function (data) {

    let years = [];
    let cases = [];

    for(let i = 0; i < data.length; i++) {
        years.push(data[i].Year);
        cases.push({season : data[i].Year, points : data[i].Avg_Op_Income, change: data[i].YOY_Change})
    }


    var width = 800;
    var height = 400;
    var padding = 15;
    var bar_width = (width / years.length);
    const margins = {top: 50, bottom: 190, left: 80, right: 50}

    var svg1 = d3.select('#area10')
        .append('svg')
        .attr('width', width + margins.left + margins.right)
        .attr('height', height + margins.top + margins.bottom)
        .attr('transform', 'translate(' + (margins.left - 80) + ',' + margins.top + ')');


    svg1.append("text")
        .attr('class', 'subtitles1')
        .attr("transform", "translate(100,0)")
        .attr("x", 120)
        .attr("y", 20)
        .attr("font-size", "24px")
        .text("NBA Average Operating Income by Year")

    svg1.append("text")
        .attr('class', 'subtitles1')
        .attr("transform", "translate(100,0)")
        .attr("x", 120)
        .attr("y", 50)
        .attr("font-size", "20px")
        .text("(2011 - 2020)")


    svg1.append("text")
        .attr('class', 'subtitles1')
        .attr("transform", "translate(100,0)")
        .attr("x", 320)
        .attr("y", 500)
        .attr("font-size", "20px")
        .text("Year")

    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 500)
        .attr("y", 850)
        .attr("font-size", "20px")
        .text("Season")


    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("transform", "rotate(-90)")
        .attr("x", -320)
        .attr("y", 20)
        .attr("font-size", "20px")
        .text("Avg Operating Income (Millions)")


    var x_scale = d3.scaleBand()
        .range([0, width])
        .domain(years);

    var y_scale = d3.scaleLinear()
        .domain([0, 80])
        .range([height, 0]);


    let x_axis = d3.axisBottom(x_scale);
    let y_axis = d3.axisLeft(y_scale);

    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip1')
        .style('opacity', 0);


    let bar_chart = svg1.append('g')
        .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');


    bar_chart.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(x_axis)
        .attr("font-size", "16px")
        .selectAll("text")
        //.attr("transform", "rotate(-60)")
        .attr("x", 0)
        .attr("y", 15);


    bar_chart.append('g')
        .call(y_axis)
        .attr("font-size", "16px");


    bar_chart.selectAll('rect')
        .data(cases)
        .enter()
        .append('rect')
        .attr('y', function (d) {
            return y_scale(d.points);
        })
        .attr('height', function (d) {
            return height - y_scale(d.points);
        })
        .attr('width', x_scale.bandwidth() - padding)
        .attr('transform', function (d, i) {
            let pos = [bar_width * i + 8, 0];
            return 'translate(' + pos + ')';
        })
        .attr('fill', 'rgb(253,185,39)')
        .attr('fill', function (d) {
            if(d.season === '2014' || d.season === '2020'){
                return ('rgb(204,28,29)');
            }else {
                return('rgb(2, 110, 215)');
            }
        })

        .on("mouseover", function(d) {
            if(d.season === '2014' || d.season === '2020'){
                d3.select(this).style("fill", d3.rgb(204,28,29).darker(2));
            }else {
                d3.select(this).style("fill", d3.rgb(2, 110, 215).darker(2));
            }

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("Average Operating Income: "+d.points + 'M<br>' +
                                 "Change Compare to Previous Year: " + d.change + "%")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px");

        })
        .on("mouseout", function(d) {
            if(d.season === '2014' || d.season === '2020'){
                d3.select(this).style("fill", d3.rgb(204,28,29));
            }else {
                d3.select(this).style("fill", d3.rgb(2, 110, 215));
            }
            temp.transition()
                .duration(500)
                .style("opacity", 0);
        })












    subgroups = ["Decreasing Years","Other Years"];

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['rgb(204,28,29)', "rgb(2, 110, 215)"])

    //Legend
    var legend = svg1.selectAll(".legend")
        .data(subgroups)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d,i) { return "translate(80," + i * 20 + ")"; })
        .style("opacity","0");

    legend.append("rect")
        .attr("x", width - 18)
        .attr("width", 18)
        .attr("height", 18)
        .style("fill", function(d) { return color(d); });

    legend.append("text")
        .attr("x", width - 24)
        .attr("y", 9)
        .attr("dy", ".35em")
        .style("text-anchor", "end")
        .text(function(d) {return d; });

    legend.transition().style("opacity","1");

})



