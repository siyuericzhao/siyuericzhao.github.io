const covidTitle = document.getElementById("covid-intro")
const covid = document.getElementById("covid-caption")
const orlando = document.getElementById("orlando-caption")
const longest = document.getElementById("longest-caption")


const annotation = document.getElementById("annotation-graph")

const loss = document.getElementById("loss")


const season_days = document.getElementById("season-days")


new Waypoint({
    element: covidTitle,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            covid.classList.add("clippers")
            covid.classList.remove("highlight-keywords")

            orlando.classList.add("highlight-keywords2")
            orlando.classList.remove("highlight-keywords")

            longest.classList.add("highlight-keywords2")
            longest.classList.remove("highlight-keywords")

            loss.classList.add("clippers")
            loss.classList.remove("highlight-keyword")
            //annotation.setAttribute("visibility", "hidden")
            // // svg1 = d3.select('line-graph-svg')
            // d3.select('line-graph-svg').selectAll("g.annotation-connector, g.annotation-note").attr('id', 'annotation-graph').classed("hidden", true);

            var annonationClass = '.annotation-test'
            d3.selectAll(annonationClass).style('visibility', 'hidden')
        }else {
            covid.classList.remove("clippers")
            covid.classList.add("highlight-keywords")

            orlando.classList.remove("highlight-keywords2")
            orlando.classList.add("highlight-keywords")

            longest.classList.remove("highlight-keywords2")
            longest.classList.add("highlight-keywords")

            loss.classList.remove("clippers")
            loss.classList.add("highlight-keywords")
        }

    },
    offset: 500
});





new Waypoint({
    element: season_days,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            var annonationClass = '.annotation-test'
            d3.selectAll(annonationClass).style('visibility', 'visible')
        }else {
            var annonationClass = '.annotation-test'
            d3.selectAll(annonationClass).style('visibility', 'hidden')
        }

    },
    offset: 400
});







