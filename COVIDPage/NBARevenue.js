
//
// d3.csv("COVIDPage/NBARevenue.csv", function (data) {
//
//     let year_x = [];
//     let revenue_data = [];
//
//     let res = ["Non Negative Growth", "Negative Growth"]
//     var color = d3.scaleOrdinal()
//         .domain(res)
//         .range(['#377eb8','#e41a1c'])
//
//     for(let i = 0; i < data.length; i++) {
//         year_x.push(data[i].Year)
//         revenue_data.push({year: data[i].Year, revenue : data[i].Avg_Op_Income, change : data[i].YOY_Change})
//     }
//
//
//     // const margins = {top: 70, bottom: 50, left: 80, right: 0}
//     // var width = 800;
//     // var height = 750;
//     // var padding = 10;
//     // var item_width = (width / year_x.length);
//     //
//     // var svg = d3.select('#area1')
//     //     .append('svg')
//     //     .attr('width', width + margins.left + margins.right)
//     //     .attr('height', height + margins.top + margins.bottom);
//
//     var margins = {top: 170, right: 100, bottom: 200, left: 90},
//         width = 1200 - margins.left - margins.right,
//         height = 800 - margins.top - margins.bottom;
//
//     var padding = 50;
//
//  var item_width = (width / year_x.length);
//     var svg = d3.select("#area10")
//         .append("svg")
//         .attr("width", width + margins.left + margins.right)
//         .attr("height", height + margins.top + margins.bottom)
//         .append("g")
//         .attr("transform",
//             "translate(" + (margins.left - 80) + "," + (margins.top - 100) + ")");
//
//
//     svg.append("text")
//         .attr("transform", "translate(100,0)")
//         .attr("x", 200)
//         .attr("y", 30)
//         .attr("font-size", "34px")
//         .text("NBA Average Operating Income by Year")
//
//     svg.append("text")
//         .attr("transform", "translate(100,0)")
//         .attr("x", 480)
//         .attr("y", 670)
//         .attr("font-size", "25px")
//         .text("Year")
//
//
//     svg.append("text")
//         .attr("transform", "translate(100,0)")
//         .attr("transform", "rotate(-90)")
//         .attr("x", -500)
//         .attr("y", 20)
//         .attr("font-size", "20px")
//         .text("Average Operating Income(Millions)")
//
//
//     var k = 1;
//     var j = 0;
//     var y_const = 25;
//     var x_const = 100;
//     var offset = 50;
//     var y_offset = 10;
//     for (let i = 0; i < res.length; i++) {
//         var category = res[i];
//         svg.append("text").attr("x", j * x_const + padding + offset).attr("y", y_const * k - y_offset).style("font-size", "15px").attr("alignment-baseline", "middle").text(category);
//         svg.append("circle").attr("cx", j * x_const + padding + offset - 15).attr("cy", y_const * k - y_offset).attr("r", 6).style("fill", color(category));
//         k++;
//         if (k === 4) {
//             k = 1;
//             j++;
//         }
//     }
//
//     var temp = d3.select('body').append('div')
//         .attr('class', 'tooltip1')
//         .style('opacity', 0);
//
//
//     var dot_plot = svg.append('g')
//         .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');
//
//     var x_scale = d3.scaleBand()
//         .rangeRound([0, width])
//         .domain(year_x);
//
//     var y_scale = d3.scaleLinear()
//         .domain([0, 80])
//         .range([height, 0]);
//
//     let x_axis = d3.axisBottom(x_scale);
//     let y_axis = d3.axisLeft(y_scale);
//
//     //console.log(revenue_data);
//
//     dot_plot.selectAll('circle')
//         .data(revenue_data)
//         .enter()
//         .append('circle')
//         .attr('cy', function (d) {
//             return y_scale(d.revenue);
//         })
//         .attr('cx', function(d, i) {
//             //console.log(i)
//             return i * item_width +52;
//         })
//         .attr('r', 8)
//         .attr('fill', function (d){
//             if(d.change < 0) {
//                 return 'red'
//             }else{
//                 return 'rgb(52, 128, 235)'
//             }
//         })
//         .on("mouseover", function(d) {
//
//             if(d.change < 0) {
//                 d3.select(this).style("fill", d3.rgb('red').darker(2));
//             }else{
//                 d3.select(this).style("fill", d3.rgb(52, 128, 235).darker(2));
//             }
//
//             d3.select(this).attr('r', 10)
//
//             temp.transition()
//                 .duration(200)
//                 .style("opacity", 1);
//             temp.html("Average Operating Income: "+d.revenue + 'M<br>' +
//                 "Change Compare to Previous Year: " + d.change + "%")
//                 .style("left", (d3.event.pageX - 60) + "px")
//                 .style("top", (d3.event.pageY + 20) + "px")
//             ;
//         })
//         .on("mouseout", function(d) {
//
//             if(d.change < 0) {
//                 d3.select(this).style("fill", d3.rgb('red'));
//             }else{
//                 d3.select(this).style("fill", d3.rgb(52, 128, 235));
//             }
//
//             d3.select(this).attr('r', 8)
//
//             temp.transition()
//                 .duration(500)
//                 .style("opacity", 0);
//         });
//
//
//
//
//
//
//
//     //x-axis
//     dot_plot.append('g')
//         .attr('transform', 'translate(0,' + height + ')')
//         .call(x_axis)
//         .attr("font-size", "16px");
//     //y-axis
//     dot_plot.append('g')
//         .call(y_axis)
//         .attr("font-size", "16px")
//
// })



















let years = [];
let cases = [];

d3.csv("COVIDPage/NBARevenue.csv", function (data) {

    let years = [];
    let cases = [];

    for(let i = 0; i < data.length; i++) {
        years.push(data[i].Year);
        cases.push({season : data[i].Year, points : data[i].Avg_Op_Income, change: data[i].YOY_Change})

        //console.log(data[i].Season)
    }

    console.log(years);
    console.log(cases);

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



