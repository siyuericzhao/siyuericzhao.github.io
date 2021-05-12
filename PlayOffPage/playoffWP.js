const playoffIntro = document.getElementById("playoff-intro")
const lakersIntro  = document.getElementById("lakers-intro")
const lakersTitlePic = document.getElementById("lakers-title-picture")


const ring = document.getElementById("ring")
const sixteenTeams = document.getElementById("16-teams")
const championship = document.getElementById("championship")

const laker_text = document.getElementById("laker-champion")
const heat_text = document.getElementById("heat-champion")
const seventeen_text = document.getElementById("17-champion")
const celtics_text = document.getElementById("celtics-champion")
const most_text = document.getElementById("most-champion")






new Waypoint({
    element: playoffIntro,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            ring.classList.add("highlight-keywords2")
            ring.classList.remove("highlight-keywords")

            sixteenTeams.classList.add("highlight-keywords2")
            sixteenTeams.classList.remove("highlight-keywords")

            championship.classList.add("highlight-keywords2")
            championship.classList.remove("highlight-keywords")

        }else {
            ring.classList.remove("highlight-keywords2")
            ring.classList.add("highlight-keywords")

            sixteenTeams.classList.remove("highlight-keywords2")
            sixteenTeams.classList.add("highlight-keywords")

            championship.classList.remove("highlight-keywords2")
            championship.classList.add("highlight-keywords")
        }
    },
    offset: 500
});







new Waypoint({
    element: lakersIntro,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            laker_text.classList.add("highlight-keywords2")
            heat_text.classList.add("heat-text")
            seventeen_text.classList.add("highlight-keywords2")
            celtics_text.classList.add("celtics-text");
            most_text.classList.add("highlight-keywords2")
        }else {
            laker_text.classList.remove("highlight-keywords2")
            heat_text.classList.remove("heat-text")
            seventeen_text.classList.remove("highlight-keywords2")
            celtics_text.classList.remove("celtics-text");
            most_text.classList.remove("highlight-keywords2")
        }
    },
    offset: 500
});





new Waypoint({
    element: lakersTitlePic,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            // lakersTitlePic.classList.remove("lakers-pic")
            lakersTitlePic.classList.add("lakers-pic-seen")
        }else {
            // lakersTitlePic.classList.add("lakers-pic")
            lakersTitlePic.classList.remove("lakers-pic-seen")
        }
    },
    offset: 400
});