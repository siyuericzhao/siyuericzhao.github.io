
/*
The code below is responsible for the Heap Map in Kobe's page that compares Kobe's achievements with other greatest of all time players
*/

d3.csv("KobePage/GreatestOfAllTime.csv", function (data) {

    let car_map = new Map();
    const cars = ['Audi', 'BMW', 'Chevrolet', 'Hyundai', 'Infiniti']
    const years = ['2009', '2010', '2011', '2012']

    const players = ['Kobe Bryant', 'Lebron James', 'Micheal Jordan', 'Magic Johnson', 'Kareem abdul-jabbar', 'Bill Russell', 'Tim Duncan', 'Larry Bird', 'Wilt Chamberlain']
    const achievements = ['Total Points', 'Season Played', 'Regular Season MVP', 'Championship Won', 'Single Game Points']

    const car_year_mpg = [];

    let x_labels_acheivements = achievements;
    let y_labels_player = [];

    let player_stats_map = new Map();
    let player_stats_ranking = [];

    for(let i = 0; i < data.length; i++) {
        player_stats_map.set(data[i].Name, new Map());
        let achievements_map = player_stats_map.get(data[i].Name);
        achievements_map.set("Total Points", data[i].Total_Points);
        achievements_map.set("Season Played", data[i].Season_Played);
        achievements_map.set("Regular Season MVP", data[i].Regular_Season_MVP);
        achievements_map.set("Championship Won", data[i].Championship_Won);
        achievements_map.set("Single Game Points", data[i].Single_Game_Points);
    }

    //console.log(player_stats_map)


    for(let player of player_stats_map.keys()) {
        y_labels_player.push(player);
        let stats_map = player_stats_map.get(player);
        for(let achievements of stats_map.keys()) {
            player_stats_ranking.push({player: player, achievements: achievements, ranking: stats_map.get(achievements)});
        }
    }

    //console.log(player_stats_ranking);
    //console.log(y_labels_player);
    //console.log(x_labels_acheivements);


    var width = 700;
    var height = 300;
    var padding = 15;
    var bar_width = (width / years.length);
    const margins = {top: 100, bottom: 190, left: 170, right: 50}

    var svg3 = d3.select('#area9')
        .append('svg')
        .attr('width', width + margins.left + margins.right)
        .attr('height', height + margins.top + margins.bottom)
        .attr('transform', 'translate(' + (margins.left - 220) + ',' + (margins.top - 100 )+ ')');

    svg3.append("text")
        .attr("transform", "translate(160,0)")
        .attr("x", 90)
        .attr("y", 65)
        .attr("font-size", "18px")
        .text("Rankings")

    svg3.append("text")
        .attr('class', 'subtitles1')
        .attr("transform", "translate(100,0)")
        .attr("x", 120)
        .attr("y", 30)
        .attr("font-size", "28px")
        .style('font-weight', 'bold')
        .text("Achievements Compared with Other Great Players")


    svg3.append("text")
        .attr("transform", "translate(100,0)")
        .attr("transform", "rotate(-90)")
        .attr("x", -155)
        .attr("y", 47)
        .attr("font-size", "20px")
        .text("Player")


    svg3.append("text")
        .attr("transform", "translate(100,0)")
        .attr("x", 330)
        .attr("y", 460)
        .attr("font-size", "20px")
        .text("Achievement Category")

    let heatmap = svg3.append('g')
        .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

    let x_scale = d3.scaleBand()
        .rangeRound([0, width])
        .domain(x_labels_acheivements).padding(0.02);

    let y_scale = d3.scaleBand()
        .domain(y_labels_player)
        .rangeRound([0, height]).padding(0.02);

    let color_scale = d3.scaleSequential()
        .interpolator(d3.interpolateInferno)
        .domain([1, 9]);

    let x_axis = d3.axisBottom().scale(x_scale);
    let y_axis = d3.axisLeft().scale(y_scale);

    svg3.append("g")
        .attr("class", "legendLinear")
        .attr('font-size', '12px')
        .attr('transform', 'translate(330,50)')

    let legendLinear = d3.legendColor()
        .shapeWidth(40)
        .cells(9)
        .orient('horizontal')
        .scale(color_scale);

    svg3.select(".legendLinear")
        .call(legendLinear)
        .attr("font-size", "13px");

    var temp = d3.select('body').append('div')
        .attr('class', 'tooltip1')
        .style('opacity', 0);


    heatmap.selectAll('rect')
        .data(player_stats_ranking, function(d) {
            return d;
        })
        .enter()
        .append('rect')
        .attr('x', function(d) {
            return x_scale(d.achievements);
        })
        .attr('y', function(d) {
            return y_scale(d.player);
        })
        .attr('height', y_scale.bandwidth())
        .attr('width', x_scale.bandwidth())
        .attr('fill', function(d) {
            return color_scale(d.ranking)
        })
        .on("mouseover", function(d) {
            d3.select(this).style("fill", d3.rgb(color_scale(d.ranking)).darker(2));
            temp.transition()
                .duration(200)
                .style("opacity", 1);

            temp.html("Player: " + d.player + "<br>Category: " + d.achievements + "<br>Ranking: "  + d.ranking)
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px");

        })
        .on("mouseout", function(d) {
            d3.select(this).style("fill", color_scale(d.ranking));
            temp.transition()
                .duration(500)
                .style("opacity", 0);
        });

    heatmap.append('g')
        .call(y_axis)
        .attr("font-size", "13px");
    heatmap.append('g')
        .attr('transform', 'translate(0,'+height+')')
        .call(x_axis)
        .attr("font-size", "12.5px");

})