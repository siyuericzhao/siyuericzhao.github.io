// set the dimensions and margins of the diagram
var margin = {top: 40, right: 90, bottom: 50, left: 150},
    width = 1100 - margin.left - margin.right,                //total svg area
    height = 650 - margin.top - margin.bottom,
    separationConstant = 1;

var treeData =
    {
        a: 'Miami',
        b: "LA Lakers",
        ascore: 2,
        bscore: 4,
        //score: "spelas nu",
        children: [
            {
                a: "Miami",
                b: 'Boston',
                ascore: 4,
                bscore: 2,
                win: true,
                children: [
                    {
                        a: 'Milwaukee',
                        b: 'Miami',
                        ascore: 1,
                        bscore: 4,
                        win: true,
                        children: [
                            {
                                a: 'Milwaukee',
                                b: 'Orlando',
                                ascore: 4,
                                bscore: 1,
                                win: true,
                            },
                            {
                                a: 'Indiana',
                                b: 'Miami',
                                ascore: 0,
                                bscore: 4,
                                win: true,
                            },
                        ]
                    },
                    {
                        a: 'Boston',
                        b: 'Toronto',
                        ascore: 4,
                        bscore: 3,
                        win: true,
                        children: [
                            {
                                a: 'Boston',
                                b: 'Philadelphia',
                                ascore: 4,
                                bscore: 0,
                                win: true,
                            },
                            {
                                a: 'Toronto',
                                b: 'Brooklyn',
                                ascore: 4,
                                bscore: 0,
                                win: true,
                            },
                        ]
                    },
                ]
            },
            {
                a: 'LA Lakers',
                b: 'Denver',
                ascore: 4,
                bscore: 1,
                win: true,
                children: [
                    {
                        a: 'LA Lakers',
                        b: 'Houston',
                        ascore: 4,
                        bscore: 1,
                        win: true,
                        children: [
                            {
                                a: 'LA Lakers',
                                b: 'Portland',
                                ascore: 4,
                                bscore: 1,
                                win: true,
                            },
                            {
                                a: 'Houston',
                                b: 'Oklahoma City',
                                ascore: 4,
                                bscore: 3,
                                win: true,
                            },
                        ]
                    },
                    {
                        a: 'Denver',
                        b: 'LA Clippers',
                        ascore: 4,
                        bscore: 3,
                        win: true,
                        children: [
                            {
                                a: 'Denver',
                                b: 'Utah',
                                ascore: 4,
                                bscore: 3,
                                win: true,
                            },
                            {
                                a: 'LA Clippers',
                                b: 'Dallas',
                                ascore: 4,
                                bscore: 2,
                                win: true,
                            },
                        ]
                    },
                ]
            }
        ]
    };

// line connector between nodes
var line = d3.line()
    .x(d => width - d.y)
    .y(d => d.x)
    .curve(d3.curveStep);

// declares a tree layout and assigns the size
var treemap = d3.tree()
    .size([height, width])
    .separation((a,b) =>a.parent == b.parent ? 1 : separationConstant);

//  assigns the data to a hierarchy using parent-child relationships
var nodes = d3.hierarchy(treeData);

// maps the node data to the tree layout
nodes = treemap(nodes);

var playoff_svg = d3.select("#svg_id")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .attr('transform', 'translate(' + (margin.left  -70) + ',' + (margin.top - 40)+ ')');    //link direction

;


playoff_svg.append("text")
    .attr('class', 'subtitles1')
    .attr("transform", "translate(100,0)")
    .attr("x", 440)
    .attr("y", 30)
    .attr("font-size", "28px")
    .style('font-weight', 'bold')
    .text("2019 - 2020 NBA Playoff Bracket")


var playoff_image = playoff_svg.append('image')       //image position
    .attr('xlink:href', 'PlayOffPage/MiamiLogo.png')
    .attr('x',970)
    .attr('y', 50)
    .attr('width',150)
    .attr('height', 350)


var playoff_image1 = playoff_svg.append('image')       //image position
    .attr('xlink:href', 'PlayOffPage/LakersLogo.jpg')
    .attr('x',970)
    .attr('y', 250)
    .attr('width',140)
    .attr('height', 350)



// var playoff_image2 = playoff_svg.append('image')       //image position
//     .attr('id', 'trophy-picture')
//     .attr('xlink:href', 'PlayOffPage/Trophy2.png')
//     .attr('x',900)
//     .attr('y', 250)
//     .attr('width',60)
//     .attr('height', 350)


var g = playoff_svg.append("g")
    .attr("transform", "translate(" + margin.left  + "," + margin.top + ")");

// adds the links between the nodes
var link = g.selectAll(".link")
    .data(nodes.descendants().slice(1))
    .enter().append("path")
    .attr("class", "link")
    .attr("d", d => line([d, d.parent ]))
    .classed("win", d => d.data.win)

// adds labels to the nodes
function gameTemplate(d) {
    return '' +

        "<div class='row" + (d.data.ascore > d.data.bscore ? ' winner' : '') + "'>" +
        "<span class='cell name'>" + d.data.a + "</span>" +
        "<span class='cell score'>" + (d.data.ascore >= 0 ? d.data.ascore : '') + "</span>" +
        "</div>" +

        "<div class='row" + (d.data.bscore > d.data.ascore ? ' winner' : '') + "'>" +
        "<span class='cell name'>" + (d.data.b || '') + "</span>" +
        "<span class='cell score'>" + (d.data.bscore >= 0 ? d.data.bscore : '') + "</span>" +
        "</div>";
}

// var svg2 = d3.select("#round1")
//     .append("text")
//     .attr('class', 'subtitles1')
//     .attr("transform", "translate(100,0)")
//     .attr("x", -35)
//     .attr("y", 20)
//     .attr("font-size", "14px")
//     .attr("fill", 'blue')
//     .style('font-weight', 'bold')
//     .text("FIRST ROUND")
//     .attr({ "xlink:href": "http://example.com/" + "" });
//
//
// var svg3 = d3.select("#round2")
//     .append("text")
//     .attr('class', 'subtitles1')
//     .attr("transform", "translate(100,0)")
//     .attr("x", -35)
//     .attr("y", 20)
//     .attr("font-size", "14px")
//     .attr("fill", 'blue')
//     .style('font-weight', 'bold')
//     .text("CONF. SEMIFINALS")
//
// var svg4 = d3.select("#round3")
//     .append("text")
//     .attr('class', 'subtitles1')
//     .attr("transform", "translate(100,0)")
//     .attr("x", -35)
//     .attr("y", 20)
//     .attr("font-size", "14px")
//     .attr("fill", 'blue')
//     .style('font-weight', 'bold')
//     .text("CONF. FINALS")
//
// var svg5 = d3.select("#round4")
//     .append("text")
//     .attr('class', 'subtitles1')
//     .attr("transform", "translate(100,0)")
//     .attr("x", -35)
//     .attr("y", 20)
//     .attr("font-size", "14px")
//     .attr("fill", 'blue')
//     .style('font-weight', 'bold')
//     .text("NBA FINALS")







var temp = d3.select('body').append('div')
    .attr('class', 'tooltip_bracket')
    .style('opacity', 0);



var labels = d3.select('#bracketBox')
    .selectAll('div')
    //.select("#area1")
    .data(nodes.descendants())
    .enter()
    .append("div")
    .classed("table", true)
    .classed("played", d => (d.data.ascore || d.data.bscore))

    .style('left', d => (width - d.y + margin.left + 10) + 'px')       //bracketBox position
    .style('top', d => (d.x + (!d.data.b ? 12 : 0) + (!d.data.children ? - 4 : 0) + 10) + 'px')
    .html(d => gameTemplate(d))
    .on("mouseover", function(d) {
        //console.log(d.data)
        if(d.data.a === "Miami" && d.data.b === "LA Lakers") {
            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Lal 116, Mia 98" +
                "<br><b> Game 2</b> Lal 124, Mia 114" +
                "<br><b> Game 3</b> Mia 115, Lal 104" +
                "<br><b>Game 4</b> Lal 102, Mia 96" +
                "<br><b>Game 5</b> Mia 111, Lal 108" +
                "<br><b>Game 6</b> Lal 106, Mia 93")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "Miami" && d.data.b === "Boston"){
            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Mia 117, Bos 114" +
                "<br><b> Game 2</b> Mia 106, Bos 101" +
                "<br><b> Game 3</b> Bos 117, Bos 106" +
                "<br><b>Game 4</b> Mia 112, Bos 109" +
                "<br><b>Game 5</b> Bos 121, Mia 108" +
                "<br><b>Game 6</b> Mia 125, Bos 113")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")
        }else if(d.data.a === "LA Lakers" && d.data.b === "Denver"){
            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Lal 126, Den 114" +
                "<br><b> Game 2</b> Lal 105, Den 103" +
                "<br><b> Game 3</b> Den 114, Lal 106" +
                "<br><b>Game 4</b> Lal 114, Den 108" +
                "<br><b>Game 5</b> Lal 117, Den 107")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")
        }else if(d.data.a === "Milwaukee" && d.data.b === "Miami"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Mia 115, Mil 104" +
                "<br><b> Game 2</b> Mia 116, Mil 114" +
                "<br><b> Game 3</b> Mia 115, Mil 100" +
                "<br><b>Game 4</b> Mil 118, Mia 115" +
                "<br><b>Game 5</b> Mia 103, Mil 94")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "Boston" && d.data.b === "Toronto"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Bos 112, Tor 94" +
                "<br><b> Game 2</b> Bos 102, Tor 99" +
                "<br><b> Game 3</b> Tor 104, Bos 103" +
                "<br><b>Game 4</b> Tor 100, Bos 93" +
                "<br><b>Game 5</b> Bos 111, Tor 89" +
                "<br><b>Game 6</b> Tor 125, Bos 122" +
                "<br><b>Game 7</b> Bos 92, Tor 87"
            )
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "LA Lakers" && d.data.b === "Houston"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Hou 112, Lal 97" +
                "<br><b> Game 2</b> Lal 117, Hou 109" +
                "<br><b> Game 3</b> Lal 112, Hou 102" +
                "<br><b>Game 4</b> Lal 110, Hou 100" +
                "<br><b>Game 5</b> Lal 119, Hou 96")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "Denver" && d.data.b === "LA Clippers"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Lac 116, Den 97" +
                "<br><b> Game 2</b> Den 124, Lac 101" +
                "<br><b> Game 3</b> Lac 115, Den 107" +
                "<br><b>Game 4</b> Lac 102, Den 85" +
                "<br><b>Game 5</b> Den 111, Lac 105" +
                "<br><b>Game 6</b> Den 111, Lac 98" +
                "<br><b>Game 7</b> Den 104, Lac 89"

            )
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")
        }else if(d.data.a === "Milwaukee" && d.data.b === "Orlando"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Orl 122, Mil 110" +
                "<br><b> Game 2</b> Mil 111, Orl 96" +
                "<br><b> Game 3</b> Mil 121, Orl 107" +
                "<br><b>Game 4</b> Mil 121, Orl 106" +
                "<br><b>Game 5</b> Mil 118, Orl 104")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "Indiana" && d.data.b === "Miami"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Mia 113, Ind 101" +
                "<br><b> Game 2</b> Mia 109, Ind 100" +
                "<br><b> Game 3</b> Mia 124, Ind 115" +
                "<br><b>Game 4</b> Mia 99, Ind 87")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "Boston" && d.data.b === "Philadelphia"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Bos 109, Phi 101" +
                "<br><b> Game 2</b> Bos 128, Phi 101" +
                "<br><b> Game 3</b> Bos 102, Phi 94" +
                "<br><b>Game 4</b> Bos 110, Phi 106")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "Toronto" && d.data.b === "Brooklyn"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Tor 134, Bkn 110" +
                "<br><b> Game 2</b> Tor 104, Bkn 99" +
                "<br><b> Game 3</b> Tor 117, Bkn 92" +
                "<br><b>Game 4</b> Tor 150, Bkn 122")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "LA Lakers" && d.data.b === "Portland"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Por 100, Lal 93" +
                "<br><b> Game 2</b> Lal 111, Por 88" +
                "<br><b> Game 3</b> Lal 116, Por 108" +
                "<br><b>Game 4</b> Lal 135, Por 115" +
                "<br><b>Game 5</b> Lal 131, Por 122")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "Houston" && d.data.b === "Oklahoma City"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Hou 123, Okc 108" +
                "<br><b> Game 2</b> Hou 111, Okc 98" +
                "<br><b> Game 3</b> Okc 119, Hou 107" +
                "<br><b>Game 4</b> Okc 117, Hou 114" +
                "<br><b>Game 5</b> Hou 114, Okc 80" +
                "<br><b>Game 6</b> Okc 104, Hou 100" +
                "<br><b>Game 7</b> Hou 104, Hou Okc"
            )
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "Denver" && d.data.b === "Utah"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Den 135, Utah 125" +
                "<br><b> Game 2</b> Utah 124, Den 105" +
                "<br><b> Game 3</b> Utah 124, Den 87" +
                "<br><b>Game 4</b> Utah 129, Den 127" +
                "<br><b>Game 5</b> Den 117, Utah 107" +
                "<br><b>Game 6</b> Den 119, Utah 107" +
                "<br><b>Game 7</b> Den 80, Utah 78")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }else if(d.data.a === "LA Clippers" && d.data.b === "Dallas"){

            temp.transition()
                .duration(200)
                .style("opacity", 1);
            temp.html("<b>Game 1</b> Lac 118, Dal 110" +
                "<br><b> Game 2</b> Dal 127, Lac 114" +
                "<br><b> Game 3</b> Lac 130, Dal 122" +
                "<br><b>Game 4</b> Dal 135, Lac 133" +
                "<br><b>Game 5</b> Lac 154, Dal 111" +
                "<br><b>Game 6</b> Lac 119, Dal 97")
                .style("left", (d3.event.pageX - 60) + "px")
                .style("top", (d3.event.pageY + 20) + "px")

        }

        d3.select(this).attr('r', 10)

        ;
    })
    .on("mouseout", function(d) {

        if(d.a === "LA Lakers" && d.b === "Portland") {
            d3.select(this).style("fill", d3.rgb('red'));
        }else{
            d3.select(this).style("fill", d3.rgb(52, 128, 235));
        }

        d3.select(this).attr('r', 8)

        temp.transition()
            .duration(500)
            .style("opacity", 0);
    });




// third place
// var thrdData = {data: {
//         a: '&nbsp;',
//         b: 'Halmstad BK',
//     }};

// var thrd = d3.select('#labels').append("div")
//     .classed("thirdplace", true)
//     .style('position', 'absolute')
//     .style('left', width - 175 + 'px')
//     .style('top', (height)/2 + margin.top - 48 + 'px')

// thrd
//     .append("div")
//     .classed("title", true)
//     .html('Tredjeplats');

// thrd
//     .append("div")
//     .classed("content", true)
//     .html(d => gameTemplate(thrdData));