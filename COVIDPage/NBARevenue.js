

d3.csv("COVIDPage/NBARevenue.csv", function (data) {

    let year_x = [];
    let revenue_data = [];

    let res = ["Non Negative Growth", "Negative Growth"]
    var color = d3.scaleOrdinal()
        .domain(res)
        .range(['#377eb8','#e41a1c'])

    for(let i = 0; i < data.length; i++) {
        year_x.push(data[i].Year)
        revenue_data.push({year: data[i].Year, revenue : data[i].Avg_Op_Income, change : data[i].YOY_Change})
    }


    // const margins = {top: 70, bottom: 50, left: 80, right: 0}
    // var width = 800;
    // var height = 750;
    // var padding = 10;
    // var item_width = (width / year_x.length);
    //
    // var svg = d3.select('#area1')
    //     .append('svg')
    //     .attr('width', width + margins.left + margins.right)
    //     .attr('height', height + margins.top + margins.bottom);

    var margins = {top: 170, right: 100, bottom: 200, left: 90},
        width = 1200 - margins.left - margins.right,
        height = 800 - margins.top - margins.bottom;

    var padding = 50;

 var item_width = (width / year_x.length);
    var svg = d3.select("#area10")
        .append("svg")
        .attr("width", width + margins.left + margins.right)
        .attr("height", height + margins.top + margins.bottom)
        .append("g")
        .attr("transform",
            "translate(" + (margins.left - 80) + "," + (margins.top - 100) + ")");


    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 200)
        .attr("y", 30)
        .attr("font-size", "34px")
        .text("NBA Average Operating Income by Year")

    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 480)
        .attr("y", 670)
        .attr("font-size", "25px")
        .text("Year")


    svg.append("text")
        .attr("transform", "translate(100,0)")
        .attr("transform", "rotate(-90)")
        .attr("x", -500)
        .attr("y", 20)
        .attr("font-size", "20px")
        .text("Average Operating Income(Millions)")


    var k = 1;
    var j = 0;
    var y_const = 25;
    var x_const = 100;
    var offset = 50;
    var y_offset = 10;
    for (let i = 0; i < res.length; i++) {
        var category = res[i];
        svg.append("text").attr("x", j * x_const + padding + offset).attr("y", y_const * k - y_offset).style("font-size", "15px").attr("alignment-baseline", "middle").text(category);
        svg.append("circle").attr("cx", j * x_const + padding + offset - 15).attr("cy", y_const * k - y_offset).attr("r", 6).style("fill", color(category));
        k++;
        if (k === 4) {
            k = 1;
            j++;
        }
    }

    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip1')
        .style('opacity', 0);


    var dot_plot = svg.append('g')
        .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

    var x_scale = d3.scaleBand()
        .rangeRound([0, width])
        .domain(year_x);

    var y_scale = d3.scaleLinear()
        .domain([0, 80])
        .range([height, 0]);

    let x_axis = d3.axisBottom(x_scale);
    let y_axis = d3.axisLeft(y_scale);

    //console.log(revenue_data);

    dot_plot.selectAll('circle')
        .data(revenue_data)
        .enter()
        .append('circle')
        .attr('cy', function (d) {
            return y_scale(d.revenue);
        })
        .attr('cx', function(d, i) {
            //console.log(i)
            return i * item_width +52;
        })
        .attr('r', 8)
        .attr('fill', function (d){
            if(d.change < 0) {
                return 'red'
            }else{
                return 'rgb(52, 128, 235)'
            }
        })
        .on("mouseover", function(d) {

            if(d.change < 0) {
                d3.select(this).style("fill", d3.rgb('red').darker(2));
            }else{
                d3.select(this).style("fill", d3.rgb(52, 128, 235).darker(2));
            }

            d3.select(this).attr('r', 10)

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("Average Operating Income: "+d.revenue + 'M<br>' +
                "Change Compare to Previous Year: " + d.change + "%")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")
            ;
        })
        .on("mouseout", function(d) {

            if(d.change < 0) {
                d3.select(this).style("fill", d3.rgb('red'));
            }else{
                d3.select(this).style("fill", d3.rgb(52, 128, 235));
            }

            d3.select(this).attr('r', 8)

            temp.transition()
                .duration(500)
                .style("opacity", 0);
        });







    //x-axis
    dot_plot.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(x_axis)
        .attr("font-size", "16px");
    //y-axis
    dot_plot.append('g')
        .call(y_axis)
        .attr("font-size", "16px")

})



