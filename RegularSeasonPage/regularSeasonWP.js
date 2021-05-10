const regularSeasonTitle = document.getElementById("regular-season-intro")
const regular_season_caption = document.getElementById("regular-season-caption")
const lakers = document.getElementById("lakers")
const clippers = document.getElementById("clippers")
const nets = document.getElementById("nets")



new Waypoint({
    element: regularSeasonTitle,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            regular_season_caption.classList.add("highlight-keywords2")
            regular_season_caption.classList.remove("highlight-keywords")

            lakers.classList.add("highlight-keywords2")
            lakers.classList.remove("highlight-keywords")

            clippers.classList.add("clippers")
            clippers.classList.remove("highlight-keywords")

            nets.classList.add("nets")
            nets.classList.remove("highlight-keywords")

        }else {
            regular_season_caption.classList.remove("highlight-keywords2")
            regular_season_caption.classList.add("highlight-keywords")

            lakers.classList.remove("highlight-keywords2")
            lakers.classList.add("highlight-keywords")

            clippers.classList.remove("clippers")
            clippers.classList.add("highlight-keywords")

            nets.classList.remove("nets")
            nets.classList.add("highlight-keywords")
        }

    },
    offset: 500
});