
// d3.csv("Kobe_Bryant.csv", function (file) {
//     return {
//         seasons : file['Season'],
//         points_per_game : +file['PTS']
//     };
// }).then(function (data) {
//     data.forEach(elem => {
//         seasons.push(elem.seasons);
//         point_per_game.push(elem.points_per_game);
//     })
d3.csv("KobePage/Kobe_Bryant.csv", function (data) {
    let seasons = [];
    let point_per_game = [];

    for(let i = 0; i < data.length; i++) {
        seasons.push(data[i].Season);
        point_per_game.push({season : data[i].Season, points : data[i].PTS})

        //console.log(data[i].Season)
    }

    //console.log(seasons);
    //console.log(point_per_game);

    var width = 700;
    var height = 300;
    var padding = 15;
    var bar_width = (width / seasons.length);
    const margins = {top: 50, bottom: 190, left: 170, right: 50}

    var svg1 = d3.select('#area7')
        .append('svg')
        .attr('width', width + margins.left + margins.right)
        .attr('height', height + margins.top + margins.bottom)
        .attr('transform', 'translate(' + (margins.left - 220) + ',' + margins.top + ')');


    svg1.append("text")
        .attr('class', 'subtitles1')
        .attr("transform", "translate(100,0)")
        .attr("x", 120)
        .attr("y", 20)
        .attr("font-size", "28px")
        .style('font-weight', 'bold')
        .text("Kobe Bryant Career Points Per Game")

    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 500)
        .attr("y", 850)
        .attr("font-size", "20px")
        .text("Season")


    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("transform", "rotate(-90)")
        .attr("x", -300)
        .attr("y", 95)
        .attr("font-size", "20px")
        .text("Points Per Game")


    var x_scale = d3.scaleBand()
        .range([0, width])
        .domain(seasons);

    var y_scale = d3.scaleLinear()
        .domain([0, 40])
        .range([height, 0]);


    let x_axis = d3.axisBottom(x_scale);
    let y_axis = d3.axisLeft(y_scale);

    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip2')
        .style('opacity', 0);


    let bar_chart = svg1.append('g')
        .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');


    bar_chart.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(x_axis)
        .attr("font-size", "16px")
        .selectAll("text")
        .attr("transform", "rotate(-60)")
        .attr("x", -30)
        .attr("y", 15);


    bar_chart.append('g')
        .call(y_axis)
        .attr("font-size", "16px");


    bar_chart.selectAll('rect')
        .data(point_per_game)
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
            if(d.season === '1999-00' || d.season === '2000-01' || d.season === '2001-02' || d.season === '2008-09' || d.season === '2009-10'){
                return ('rgb(253,185,39)');
            }else {
                return('rgb(120, 47, 188)');
            }
        })

        .on("mouseover", function(d) {
            if(d.season === '1999-00' || d.season === '2000-01' || d.season === '2001-02' || d.season === '2008-09' || d.season === '2009-10'){
                d3.select(this).style("fill", d3.rgb(253,185,39).darker(2));
            }else {
                d3.select(this).style("fill", d3.rgb(120, 47, 188).darker(2));
            }

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("Season: "+d.season + '<br>' +
                "Points Per Game :" + d.points)
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px");

        })
        .on("mouseout", function(d) {
            if(d.season === '1999-00' || d.season === '2000-01' || d.season === '2001-02' || d.season === '2008-09' || d.season === '2009-10'){
                d3.select(this).style("fill", d3.rgb(253,185,39));
            }else {
                d3.select(this).style("fill", d3.rgb(120, 47, 188));
            }
            temp.transition()
                .duration(500)
                .style("opacity", 0);
        })












    subgroups = ["Championship Season","Other Seasons"];

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['rgb(253,185,39)', "rgb(120, 47, 188)"])

    //Legend
    var legend = svg1.selectAll(".legend")
        .data(subgroups)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d,i) { return "translate(160," + i * 20 + ")"; })
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



