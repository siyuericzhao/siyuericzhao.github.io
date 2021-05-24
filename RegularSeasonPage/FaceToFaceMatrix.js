/*
The code below is responsible for face to face matrix in the Regular Season page
*/

d3.csv("RegularSeasonPage/RegularSeasonMatches.csv", function (data) {
    let edges = [];
    let nodes = [];
    let set = new Set();


    for(let i = 0; i < data.length; i++) {
        set.add(data[i].Source);
        edges.push({source: data[i].Source, target: data[i].Target});
    }


    set.forEach(elem => {
        nodes.push(elem);
    })

    nodes.sort((a, b) => a - b);
    nodes.forEach(function (a) {
        nodes.forEach(function (b) {
            let weight = 0;
            let source_value = 0;
            let target_value = 0;

            for(let i = 0; i < data.length; i++) {
                if ((data[i].Source === a && data[i].Target === b) || (data[i].Source === b && data[i].Target === a)) {
                    weight = 1
                    if(data[i].Source === a && data[i].Target === b) {
                        source_value = data[i].Source_Value;
                        target_value = data[i].Target_Value;
                    }else if(data[i].Source === b && data[i].Target === a) {
                        source_value = data[i].Target_Value;
                        target_value = data[i].Source_Value;
                    }
                }
            }
            edges.push({ source: a, target: b, weight: weight, source_value : source_value, target_value : target_value })
        })
    });


    var svgWidth = 700;
    var svgHeight = 700;
    var padding = 15;
    //var bar_width = (width / seasons.length);
    const margin = {top: 100, bottom: 190, left: 170, right: 50}

    let xScale = d3.scaleBand()
        .rangeRound([0, svgWidth])
        .domain(nodes)
        .padding(0.1);

    let yScale = d3.scaleBand()
        .rangeRound([0, svgWidth])
        .domain(nodes)
        .padding(0.1);


    var svg2 = d3.select('#area6')
        .append('svg')
        .attr('width', svgWidth + margin.left + margin.right)
        .attr('height', svgHeight + margin.top + margin.bottom)
        .attr('transform', 'translate(' + (margin.left - 220) + ',' + (margin.top - 60) + ')');


    svg2.append("text")
        .attr("x", 140)
        .attr("y", 40)
        .attr("font-size",30)
        .text('Regular Season Face To Face Wins Between Top 10 Teams ')


    svg2.append("text")
        .attr("x", 340)
        .attr("y", 70)
        .attr("font-size",20)
        .text('Please hover over each block to see details')


    let plot = svg2.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')


    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip1')
        .style('opacity', 0);

    let node = plot.append("g")
        .selectAll("rect")
        .data(edges)
        .enter()
        .append("rect")
        .attr("class", "grid")
        .style("stroke", "black")
        .style("stroke-width", "0.4px")
        .attr('height', yScale.bandwidth())
        .attr('width', xScale.bandwidth())
        .attr('x', function (d) {
            return xScale(d.source);
        })
        .attr('y', function (d) {
            return yScale(d.target);
        })
        .style("fill", function (d) {
            if (d.weight === 0) {
                return 'white'
            }
            // return d3.rgb(79,129,188)
            return d3.rgb(211,211,211)
        })
        // .on("mouseover", mouseOver)
        // .on("mouseover", mouseLeave)
        .on("mouseover", function(d) {
            //d3.select(this).style("fill", d3.rgb(color_scale(d.Win_Prev)).darker(2));
            if (d.weight === 0) {
                d3.select(this).style("fill", d3.rgb(255,255,255).darker(2));
            }else {
                // d3.select(this).style("fill", d3.rgb(79,129,188).darker(2));
                d3.select(this).style("fill", d3.rgb(211,211,211).darker(2));
            }

            if(d.source !== d.target) {

                temp.transition()
                    .duration(200)
                    .style("opacity", 1);

                temp.html("Face to Face Wins: <br>" + d.source + ": " + d.source_value + "<br>" + d.target + ": " + d.target_value)
                    .style("left", (d3.event.pageX - 60) + "px")
                    .style("top", (d3.event.pageY + 20) + "px");
            }

        })
        .on("mouseout", function(d) {
            // d3.select(this).style("fill", color_scale(d.Win_Prev));
            if (d.weight === 0) {
                d3.select(this).style("fill", 'white');
            }else {
                // d3.select(this).style("fill", 'rgb(79,129,188)');
                d3.select(this).style("fill", 'lightgrey');
            }

            temp.transition()
                .duration(500)
                .style("opacity", 0);
        });


    let x_axis = d3.axisTop().scale(xScale);
    let y_axis = d3.axisLeft().scale(yScale);

    plot.append('g')
        //.attr('transform', 'translate(0,' + svgHeight +')')
        .attr('transform', 'translate(0,0)')
        .call(x_axis)
        .attr('font-size', 15)

    plot.append('g')
        .call(y_axis)
        .attr('font-size', 15)


});