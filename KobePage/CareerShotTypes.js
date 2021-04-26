//
// const colorLabel = 'Basic Shot Types';
// const margin = { left: 140, right: 120, top: 20, bottom: 120 };
//
// const svg2 = d3.select("#area8").append("svg")
//     .attr("width", 1000)
//     .attr("height", 500);
//
// const width = svg2.attr('width');
// const height = svg2.attr('height');
// const innerWidth = width - margin.left - margin.right;
// const innerHeight = height - margin.top - margin.bottom;
//
// const g = svg2.append('g')
//     .attr('transform', `translate(${margin.left},${margin.top+50})`);
// const colorLegendG = g.append('g')
//     .attr('transform', `translate(${innerWidth - 100}, 50)`);
//
// const canvas = g.append('g')
//     .attr('transform', `translate(${innerWidth / 2},${innerHeight / 2})`);
//
// var temp = d3.select('body').append('div')
//     .attr('class', 'tooltip')
//     .style('opacity', 0);
//
//
// g.append('text')
//     .attr('class', 'subtitle')
//     .attr('x', margin.left - 30)
//     .attr('y', margin.top - 60)
//     .style('font-weight', 'bold')
//     .text('Kobe Bryant Career Shot Type');
//
//
// colorLegendG.append('text')
//     .attr('class', 'legend-label')
//     .attr('x', -30)
//     .attr('y', -20)
//     .text(colorLabel);
//
// const colorScale = d3.scaleOrdinal()
//     .range(d3.schemeCategory20);
//
//
// const colorLegend = d3.legendColor()
//     .scale(colorScale)
//     .shape('square');
//
// const pie = d3.pie().value(d => d.value);
//
// const arc = d3.arc()
//     .innerRadius(innerHeight / 4)
//     .outerRadius(innerHeight / 2);
//
// var temp = d3.select('body').append('div')
//     .attr('class', 'tooltip')
//     .style('opacity', 0);


d3.csv('KobePage/kobe.csv', data => {



    const colorLabel = 'Basic Shot Types';
    const margin = { left: 170, right: 120, top: 20, bottom: 120 };

    const svg2 = d3.select("#area8").append("svg")
        .attr("width", 1000)
        .attr("height", 500);

    const width = svg2.attr('width');
    const height = svg2.attr('height');
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg2.append('g')
        .attr('transform', `translate(${(margin.left - 100)},${margin.top+50})`);
    const colorLegendG = g.append('g')
        .attr('transform', `translate(${innerWidth - 100}, 50)`);

    const canvas = g.append('g')
        .attr('transform', `translate(${innerWidth / 2},${innerHeight / 2})`);

    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip1')
        .style('opacity', 0);


    g.append('text')
        .attr('class', 'subtitle')
        .attr('x', margin.left - 30)
        .attr('y', margin.top - 60)
        .style('font-weight', 'bold')
        .text('Kobe Bryant Career Shot Type');


    colorLegendG.append('text')
        .attr('class', 'legend-label')
        .attr('x', -30)
        .attr('y', -20)
        .text(colorLabel);

    const colorScale = d3.scaleOrdinal()
        .range(d3.schemeCategory20);


    const colorLegend = d3.legendColor()
        .scale(colorScale)
        .shape('square');

    const pie = d3.pie().value(d => d.value);

    const arc = d3.arc()
        .innerRadius(innerHeight / 4)
        .outerRadius(innerHeight / 2);

    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip2')
        .style('opacity', 0);





    var temp_data = d3.nest()
        .key(function(d) { return d.combined_shot_type; })
        .rollup(d => d.length)
        .entries(data);

    const arcs = pie(temp_data);

    canvas.selectAll('path')
        .data(arcs)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', d => colorScale(d.data.key))
        .on("mouseover", function(d) {
            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("Basic shot Type:"+d.data.key + '<br>' +
                "Shot Count:" + d.data.value)
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")
            ;
        })
        .on("mouseout", function(d) {
            temp.transition()
                .duration(500)
                .style("opacity", 0);
        });

    colorLegendG.call(colorLegend)
        .selectAll('.cell text')
        .attr('dy', '0.1em');
});