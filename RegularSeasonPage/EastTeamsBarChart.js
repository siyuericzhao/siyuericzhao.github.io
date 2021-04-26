
d3.csv("RegularSeasonPage/Eastern_Conference_Teams.csv", function (data) {
    let teams = [];
    let team_data = [];


    for(let i = 0; i < data.length; i++) {
        teams.push(data[i].Team);
        team_data.push({Team: data[i].Team, Win: data[i].W, Win_Prev: data[i].W_Prev})
    }


    //console.log(teams);
    //console.log(team_data);

    var width = 700;
    var height = 350;
    var padding = 15;
    //var bar_width = (width / seasons.length);
    const margins = {top: 100, bottom: 190, left: 170, right: 50}

    var svg = d3.select('#area4')
        .append('svg')
        .attr('width', width + margins.left + margins.right)
        .attr('height', height + margins.top + margins.bottom)
        .attr('transform', 'translate(' + (margins.left - 220) + ',' + margins.top + ')');


    // const margins = {top: 70, bottom: 70, left: 100, right: 0};
    // let width = 700;
    // let height = 700;
    //
    // let svg = d3.select('body')
    //     .append('svg')
    //     .attr('width', width + margins.left + margins.right)
    //     .attr('height', height + margins.top + margins.bottom);

    // svg.append("text")
    //     .attr('class', 'subtitle')
    //     .attr('x', margins.left - 30)
    //     .attr('y', margins.top - 60)
    //     .style('font-weight', 'bold')
    //     .text('Western Conference ');


    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 120)
        .attr("y", 74)
        .attr("font-size", "18px")
        .text("Wins Previous Season")

    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 275)
        .attr("y", 820)
        .attr("font-size", "20px")
        .text("Average Mile Per Gallon(Highway)")

    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("transform", "rotate(-90)")
        .attr("x", -160)
        .attr("y", 77)
        .attr("font-size", "20px")
        .text("Teams")

    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 270)
        .attr("y", 500)
        .attr("font-size", "20px")
        .text("Total Regular Season Wins This Season")


    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 280)
        .attr("y", 30)
        .attr("font-size", "35px")
        .text("Eastern Conference")


    let barGraph = svg.append('g')
        .attr('transform', 'translate(' + (margins.left + 50)+ ',' + margins.top + ')');

    let x_scale = d3.scaleLinear()
        .range([0, width + 10])
        .domain([0,60])
    ;

    let y_scale = d3.scaleBand()
        .domain(teams)
        .rangeRound([0, height]).padding(0.03);

    let color_scale = d3.scaleSequential()
        .interpolator(d3.interpolateBlues)
        .domain([10, 60]);

    let x_axis = d3.axisBottom().scale(x_scale);
    let y_axis = d3.axisLeft().scale(y_scale);

    svg.append("g")
        .attr("class", "legendLinear")
        .attr('font-size', '12px')
        .attr('transform', 'translate(400,60)')

    let legendLinear = d3.legendColor()
        .shapeWidth(40)
        .cells(10)
        .orient('horizontal')
        .scale(color_scale);

    svg.select(".legendLinear")
        .call(legendLinear)
        .attr("font-size", "13px");

    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip1')
        .style('opacity', 0);

    barGraph.selectAll('rect')
        .data(team_data, function(d) {
            return d;
        })
        .enter()
        .append('rect')
        .attr('x', 0)
        .attr('y', function(d) {
            return y_scale(d.Team);
        })
        .attr('height', y_scale.bandwidth())


        .attr('width', function (d){
            return x_scale(d.Win);
        })

        .attr('fill', function(d) {
            return color_scale(d.Win_Prev)
        }).on("mouseover", function(d) {
        d3.select(this).style("fill", d3.rgb(color_scale(d.Win_Prev)).darker(2));
        temp.transition()
            .duration(200)
            .style("opacity", 1);

        temp.html("Team: " + d.Team + "<br>Total Wins This Season: " + d.Win + "<br>Total Wins Last Season: "  + d.Win_Prev)
            .style("left", (d3.event.pageX - 60) + "px")
            .style("top", (d3.event.pageY + 20) + "px");

    })
        .on("mouseout", function(d) {
            d3.select(this).style("fill", color_scale(d.Win_Prev));
            temp.transition()
                .duration(500)
                .style("opacity", 0);
        });

    barGraph.append('g')
        .call(y_axis)
        .attr("font-size", "13px");
    barGraph.append('g')
        .attr('transform', 'translate(0,'+height+')')
        .call(x_axis)
        .attr("font-size", "12.5px");

})
