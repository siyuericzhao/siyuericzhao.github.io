

/*
The code below is responsible for the Kobe's points per game  for each season over his 20-year career
*/

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

    var width = 900;
    var height = 300;
    var padding = 15;
    var bar_width = (width / seasons.length);
    const margins = {top: 50, bottom: 190, left: 170, right: 50}

    var svg1 = d3.select('#area7')
        .append('svg')
        .attr('width', width + margins.left + margins.right)
        .attr('height', height + margins.top + margins.bottom)
        .attr('transform', 'translate(' + (margins.left - 220) + ',' + margins.top + ')');


    var TrophyDrawing1 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/TrophyDrawing.png')
        .attr('x',309)
        .attr('y', 240)
        .attr('width',40)
        .attr('height', 350)
        .style('visibility', 'visible')

    var TrophyDrawing2 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/TrophyDrawing.png')
        .attr('x',354)
        .attr('y', 240)
        .attr('width',40)
        .attr('height', 350)
        .style('visibility', 'visible')


    var TrophyDrawing3 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/TrophyDrawing.png')
        .attr('x',399)
        .attr('y', 240)
        .attr('width',40)
        .attr('height', 350)
        .style('visibility', 'visible')


    var TrophyDrawing4 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/TrophyDrawing.png')
        .attr('x',715)
        .attr('y', 240)
        .attr('width',40)
        .attr('height', 350)
        .style('visibility', 'visible')


    var TrophyDrawing5 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/TrophyDrawing.png')
        .attr('x',760)
        .attr('y', 240)
        .attr('width',40)
        .attr('height', 350)
        .style('visibility', 'visible')





    var kobeChampion2000 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Champion/Kobe-Champion-2000(2).png')
        .attr('x',171)
        .attr('y', -206)
        .attr('width',900)
        .attr('height', 700)
        .style('visibility', 'hidden')
        .style('opacity', '0.18')

    var kobeChampion2001 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Champion/Kobe-Champion-2001(1).png')
        .attr('x',171)
        .attr('y', -218)
        .attr('width',900)
        .attr('height', 700)
        .style('visibility', 'hidden')
        .style('opacity', '0.18')

    var kobeChampion2002 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Champion/Kobe-Champion-2002(1).png')
        .attr('x',171)
        .attr('y', -211)
        .attr('width',900)
        .attr('height', 700)
        .style('visibility', 'hidden')
        .style('opacity', '0.18')

    var kobeChampion2009 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Champion/Kobe-Champion-2009(1).png')
        .attr('x',171)
        .attr('y', -206)
        .attr('width',900)
        .attr('height', 700)
        .style('visibility', 'hidden')
        .style('opacity', '0.18')

    var kobeChampion2010 = svg1.append('image')       //image position
        .attr('xlink:href', 'KobePage/Kobe-Champion/Kobe-Champion-2010(3).png')
        .attr('x',171)
        .attr('y', -206)
        .attr('width',900)
        .attr('height', 700)
        .style('visibility', 'hidden')
        .style('opacity', '0.19')




    svg1.append("text")
        .attr('class', 'subtitles1')
        .attr("transform", "translate(100,0)")
        .attr("x", 260)
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
        // .attr("transform", "rotate(-60)")
        .attr("x", 0)
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
        .attr('width', x_scale.bandwidth() + 10 - padding - 5)
        .attr('transform', function (d, i) {
            let pos = [bar_width * i + 8, 0];
            return 'translate(' + pos + ')';
        })
        .attr('fill', 'rgb(253,185,39)')
        .attr('fill', function (d) {
            if(d.season === '99-00' || d.season === '00-01' || d.season === '01-02' || d.season === '08-09' || d.season === '09-10'){
                return ('rgb(253,185,39)');
            }else {
                return('rgb(120, 47, 188)');
            }
        })

        .on("mouseover", function(d) {
            if(d.season === '99-00' || d.season === '00-01' || d.season === '01-02' || d.season === '08-09' || d.season === '09-10'){
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

            if(d.season === '99-00') {
                kobeChampion2000.style('visibility', 'visible')
            }else if(d.season === '00-01') {
                kobeChampion2001.style('visibility', 'visible')
            }else if(d.season === '01-02') {
                kobeChampion2002.style('visibility', 'visible')
            }else if(d.season === '08-09') {
                kobeChampion2009.style('visibility', 'visible')
            }else if(d.season === '09-10') {
                kobeChampion2010.style('visibility', 'visible')
            }


        })
        .on("mouseout", function(d) {
            if(d.season === '99-00' || d.season === '00-01' || d.season === '01-02' || d.season === '08-09' || d.season === '09-10'){
                d3.select(this).style("fill", d3.rgb(253,185,39));
            }else {
                d3.select(this).style("fill", d3.rgb(120, 47, 188));
            }
            temp.transition()
                .duration(500)
                .style("opacity", 0);

                kobeChampion2000.style('visibility', 'hidden')
                kobeChampion2001.style('visibility', 'hidden')
                kobeChampion2002.style('visibility', 'hidden')
                kobeChampion2009.style('visibility', 'hidden')
                kobeChampion2010.style('visibility', 'hidden')

        })



    subgroups = ["Championship Seasons","Other Seasons"];

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



