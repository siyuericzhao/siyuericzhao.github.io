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
        .attr("width", 1100)
        .attr("height", 600);


    var kobe_jumpshot = svg2.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Jumpshot.png')
        .attr('x',750)
        .attr('y', 250)
        .attr('width',280)
        .attr('height', 350)
        .style('visibility', 'hidden')

    var kobe_dunk = svg2.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Dunk.png')
        .attr('x',750)
        .attr('y', 250)
        .attr('width',280)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var kobe_layup = svg2.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Layup.png')
        .attr('x',750)
        .attr('y', 250)
        .attr('width',280)
        .attr('height', 350)
        .style('visibility', 'hidden')

    var kobe_tipshot = svg2.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Tipshot.png')
        .attr('x',750)
        .attr('y', 250)
        .attr('width',280)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var kobe_hookshot = svg2.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Hookshot.png')
        .attr('x',750)
        .attr('y', 250)
        .attr('width',280)
        .attr('height', 350)
        .style('visibility', 'hidden')

    var kobe_bankshot = svg2.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Bankshot.png')
        .attr('x',750)
        .attr('y', 250)
        .attr('width',280)
        .attr('height', 350)
        .style('visibility', 'hidden')





    // var kobe_bankshot = svg2.append('image')       //image position
    //     .attr('xlink:href', '672280.png')
    //     .attr('x',750)
    //     .attr('y', 250)
    //     .attr('width',280)
    //     .attr('height', 350)
    //     .style('visibility', 'visible')








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




    var jump_percentage = g.append('text')
        .attr('class', 'subtitle')
        .attr('x', '340')
        .attr('y', '230')
        .style('font-weight', 'bold')
        .style('font-size', '50px')
        .text('76.5 %')
        .style('visibility', 'hidden')

    var dunk_percentage = g.append('text')
        .attr('class', 'subtitle')
        .attr('x', '340')
        .attr('y', '230')
        .style('font-weight', 'bold')
        .style('font-size', '50px')
        .text('4.2 %')
        .style('visibility', 'hidden')

    var layup_percentage = g.append('text')
        .attr('class', 'subtitle')
        .attr('x', '340')
        .attr('y', '230')
        .style('font-weight', 'bold')
        .style('font-size', '50px')
        .text('17.8 %')
        .style('visibility', 'hidden')


    var tip_percentage = g.append('text')
        .attr('class', 'subtitle')
        .attr('x', '340')
        .attr('y', '230')
        .style('font-weight', 'bold')
        .style('font-size', '50px')
        .text('0.59 %')
        .style('visibility', 'hidden')


    var hook_percentage = g.append('text')
        .attr('class', 'subtitle')
        .attr('x', '340')
        .attr('y', '230')
        .style('font-weight', 'bold')
        .style('font-size', '50px')
        .text('0.49 %')
        .style('visibility', 'hidden')


    var bank_percentage = g.append('text')
        .attr('class', 'subtitle')
        .attr('x', '340')
        .attr('y', '230')
        .style('font-weight', 'bold')
        .style('font-size', '50px')
        .text('0.42 %')
        .style('visibility', 'hidden')




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

            d3.select(this).style("fill", d3.rgb(colorScale(d.data.key)).darker(1));

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("Basic Shot Type: "+d.data.key + '<br>' +
                "Total Shot Count: " + d.data.value)
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")
            ;
            if(d.data.key === 'Jump Shot') {
                kobe_jumpshot.style('visibility', 'visible')
                jump_percentage.style('visibility', 'visible')
            }else if(d.data.key === 'Dunk') {
                kobe_dunk.style('visibility', 'visible')
                dunk_percentage.style('visibility', 'visible')
            }
            else if(d.data.key === 'Layup') {
                kobe_layup.style('visibility', 'visible')
                layup_percentage.style('visibility', 'visible')
            }
            else if(d.data.key === 'Tip Shot') {
                kobe_tipshot.style('visibility', 'visible')
                tip_percentage.style('visibility', 'visible')
            }
            else if(d.data.key === 'Hook Shot') {
                kobe_hookshot.style('visibility', 'visible')
                hook_percentage.style('visibility', 'visible')
            }
            else if(d.data.key === 'Bank Shot') {
                kobe_bankshot.style('visibility', 'visible')
                bank_percentage.style('visibility', 'visible')
            }

        })
        .on("mouseout", function(d) {

            d3.select(this).style("fill", d3.rgb(colorScale(d.data.key)));
            temp.transition()
                .duration(500)
                .style("opacity", 0);
            kobe_jumpshot.style('visibility', 'hidden')
            kobe_dunk.style('visibility', 'hidden')
            kobe_layup.style('visibility', 'hidden')
            kobe_tipshot.style('visibility', 'hidden')
            kobe_hookshot.style('visibility', 'hidden')
            kobe_bankshot.style('visibility', 'hidden')


            jump_percentage.style('visibility', 'hidden')
            dunk_percentage.style('visibility', 'hidden')
            layup_percentage.style('visibility', 'hidden')
            tip_percentage.style('visibility', 'hidden')
            hook_percentage.style('visibility', 'hidden')
            bank_percentage.style('visibility', 'hidden')
        });

    colorLegendG.call(colorLegend)
        .selectAll('.cell text')
        .attr('dy', '0.1em');
});