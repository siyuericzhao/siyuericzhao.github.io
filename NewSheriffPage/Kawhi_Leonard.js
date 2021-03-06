
/*
The code below is responsible for the Kawhi Leonard grouped bar charts in the New Sheriff's page
*/

// Parse the Data
d3.csv("NewSheriffPage/KawhiLeonard.csv", function(data) {



// set the dimensions and margins of the graph
    var margin = {top: 10, right: 30, bottom: 20, left: 50},
        width = 1100 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
    var svg2 = d3.select("#area3")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    svg2.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 130)
        .attr("y", 20)
        .attr("font-size", "24px")
        .text("Kawhi Leonard Player States 2015 - 2019")

    let KL_seasons = [];
    let KL_groups = [];


    var myimage = svg2.append('image')
        .attr('xlink:href', 'NewSheriffPage/Kawhi_Leonard.png')
        .attr('x', 880)
        .attr('y',70)
        .attr('width', 180)
        .attr('height', 150)


    //console.log(data.columns.slice(25,29))


    // List of subgroups = header of the csv files = soil condition here


    for(let i = 0; i < data.length; i++) {
        if(data[i].Season === "2015-16" || data[i].Season === "2016-17" || data[i].Season === "2017-18" || data[i].Season === "2018-19") {
            KL_seasons.push(data[i]);
            KL_groups.push(data[i].Season)
        }

    }


    //var subgroups = data.columns.slice(25,30)
    var subgroups = ["Points Per Game", "Rebound Per Game", "Assists Per Game"]
    //console.log(subgroups)

    // List of groups = species here = value of the first column called group -> I show them on the X axis
    var groups = d3.map(data, function(d){return(d.Season)}).keys();
    //var groups = ["banana", "poacee", "sorgho", "triticum"];
    //console.log(groups)



    // Add X axis
    var x = d3.scaleBand()
        .domain(KL_groups)
        .range([0, width])
        .padding([0.2])
    svg2.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSize(0));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 30])
        .range([ height, 0 ]);
    svg2.append("g")
        .call(d3.axisLeft(y));


    svg2.append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 0)
        .attr("y", 15)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Value");


    // Another scale for subgroup position?
    var xSubgroup = d3.scaleBand()
        .domain(subgroups)
        .range([0, x.bandwidth()])
        .padding([0.05])

    // color palette = one color per subgroup
    var color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#e41a1c','#377eb8','#4daf4a'])

    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);


    // Show the bars
    svg2.append("g")
        .selectAll("g")
        // Enter in data = loop group per group
        .data(KL_seasons)
        .enter()
        .append("g")
        .attr("transform", function(d) { return "translate(" + x(d.Season) + ",0)"; })

        .selectAll("rect")
        .data(function(d) { return subgroups.map(function(key) { return {key: key, value: d[key]}; }); })
        .enter().append("rect")
        .attr("x", function(d) { return xSubgroup(d.key); })
        .attr("y", function(d) { return y(d.value); })
        .attr("width", xSubgroup.bandwidth())
        .attr("height", function(d) { return height - y(d.value); })
        .attr("fill", function(d) { return color(d.key); })
        .on("mouseover", function(d) {
        d3.select(this).style("fill", d3.rgb(color(d.key)).darker(2));
            temp.transition()
                .duration(200)
                .style("opacity", 1);

            temp.html(d.key + ': ' + d.value)
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px");
        })
        .on("mouseout", function(d) {
            d3.select(this).style("fill", color(d.key));
            temp.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .append("title")
        .text(function(d) { return d.key + ":\n" + d.value; });



    //Legend
    var legend = svg2.selectAll(".legend")
        .data(subgroups)
        .enter().append("g")
        .attr("class", "legend")
        .attr("transform", function(d,i) { return "translate(30," + i * 20 + ")"; })
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

    legend.transition().duration(500).delay(function(d,i){ return 1300 + 100 * i; }).style("opacity","1");


})

