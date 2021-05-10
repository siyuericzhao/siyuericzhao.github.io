const covidTitle = document.getElementById("covid-intro")
const covid = document.getElementById("covid-caption")
const orlando = document.getElementById("orlando-caption")
const longest = document.getElementById("longest-caption")

const loss = document.getElementById("loss")


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