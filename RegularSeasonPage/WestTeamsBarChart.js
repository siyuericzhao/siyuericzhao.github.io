d3.csv("RegularSeasonPage/Western_Conference_Teams.csv", function (data) {
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

    var svg1 = d3.select('#area5')
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



    var Lakers_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Lakers.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Clippers_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Clippers.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Nuggets_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Nuggets.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Rockets_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Rockets.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Thunder_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Thunder.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Jazz_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Jazz.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')

    var Mavericks_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Mavericks.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Blazers_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Blazers.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Grizzlies_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Grizzlies.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Suns_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Suns.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Spurs_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Spurs.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Kings_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Kings.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Pelicans_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Pelicans.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Wolves_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Wolves.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')


    var Warriors_logo = svg1.append('image')       //image position
        .attr('xlink:href', 'RegularSeasonPage/NBALogo/Warriors.png')
        .attr('x',660)
        .attr('y', 170)
        .attr('width',180)
        .attr('height', 350)
        .style('visibility', 'hidden')




    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 120)
        .attr("y", 74)
        .attr("font-size", "18px")
        .text("Wins Previous Season")

    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 275)
        .attr("y", 820)
        .attr("font-size", "20px")
        .text("Average Mile Per Gallon(Highway)")

    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("transform", "rotate(-90)")
        .attr("x", -160)
        .attr("y", 77)
        .attr("font-size", "20px")
        .text("Teams")

    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 270)
        .attr("y", 500)
        .attr("font-size", "20px")
        .text("Total Regular Season Wins This Season")


    svg1.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 280)
        .attr("y", 30)
        .attr("font-size", "35px")
        .text("Western Conference")


    let barGraph = svg1.append('g')
        .attr('transform', 'translate(' + (margins.left  + 50)+ ',' + margins.top + ')');

    let x_scale = d3.scaleLinear()
        .range([0, width + 10])
        .domain([0,60])
    ;

    let y_scale = d3.scaleBand()
        .domain(teams)
        .rangeRound([0, height]).padding(0.03);

    let color_scale = d3.scaleSequential()
        .interpolator(d3.interpolateOranges)
        .domain([10, 60]);

    let x_axis = d3.axisBottom().scale(x_scale);
    let y_axis = d3.axisLeft().scale(y_scale);

    svg1.append("g")
        .attr("class", "legendLinear")
        .attr('font-size', '12px')
        .attr('transform', 'translate(400,60)')

    let legendLinear = d3.legendColor()
        .shapeWidth(40)
        .cells(10)
        .orient('horizontal')
        .scale(color_scale);

    svg1.select(".legendLinear")
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


        if(d.Team === "Los Angeles Lakers") {
            Lakers_logo.style('visibility', 'visible')
        }else if(d.Team === "Los Angeles Clippers") {
            Clippers_logo.style('visibility', 'visible')
        }else if(d.Team === "Denver Nuggets") {
            Nuggets_logo.style('visibility', 'visible')
        }else if(d.Team === "Houston Rockets") {
            Rockets_logo.style('visibility', 'visible')
        }else if(d.Team === "Oklahoma City Thunder") {
            Thunder_logo.style('visibility', 'visible')
        }else if(d.Team === "Utah Jazz") {
            Jazz_logo.style('visibility', 'visible')
        }else if(d.Team === "Dallas Mavericks") {
            Mavericks_logo.style('visibility', 'visible')
        }else if(d.Team === "Portland Trail Blazers") {
            Blazers_logo.style('visibility', 'visible')
        }else if(d.Team === "Memphis Grizzlies") {
            Grizzlies_logo.style('visibility', 'visible')
        }else if(d.Team === "Phoenix Suns") {
            Suns_logo.style('visibility', 'visible')
        }else if(d.Team === "San Antonio Spurs") {
            Spurs_logo.style('visibility', 'visible')
        }else if(d.Team === "New Orleans Pelicans") {
            Pelicans_logo.style('visibility', 'visible')
        }else if(d.Team === "Minnesota Timberwolves") {
            Wolves_logo.style('visibility', 'visible')
        }else if(d.Team === "Golden State Warriors") {
            Warriors_logo.style('visibility', 'visible')
        }else if(d.Team === "Sacramento Kings") {
            Kings_logo.style('visibility', 'visible')
        }

    })
        .on("mouseout", function(d) {
            d3.select(this).style("fill", color_scale(d.Win_Prev));
            temp.transition()
                .duration(500)
                .style("opacity", 0);



                Lakers_logo.style('visibility', 'hidden')
                Clippers_logo.style('visibility', 'hidden')
                Nuggets_logo.style('visibility', 'hidden')
                Rockets_logo.style('visibility', 'hidden')
                Thunder_logo.style('visibility', 'hidden')
                Jazz_logo.style('visibility', 'hidden')
                Mavericks_logo.style('visibility', 'hidden')
                Blazers_logo.style('visibility', 'hidden')
                Grizzlies_logo.style('visibility', 'hidden')
                Suns_logo.style('visibility', 'hidden')
                Spurs_logo.style('visibility', 'hidden')
                Pelicans_logo.style('visibility', 'hidden')
                Wolves_logo.style('visibility', 'hidden')
                Warriors_logo.style('visibility', 'hidden')
                Kings_logo.style('visibility', 'hidden')







        })


    ;

    barGraph.append('g')
        .call(y_axis)
        .attr("font-size", "13px");
    barGraph.append('g')
        .attr('transform', 'translate(0,'+height+')')
        .call(x_axis)
        .attr("font-size", "12.5px");

})
