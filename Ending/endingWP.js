
/*
The code below is responsible for the scrolling effect and transitions in Ending page. This uses the WayPoints Library.
*/

const endIntro = document.getElementById("the-end-intro")
const loveText = document.getElementById("love-text")


new Waypoint({
    element: endIntro,
    handler: function (direction) {
        //console.log(direction)
        if(direction === "down") {
            loveText.classList.add("love-text")
        }else {
            loveText.classList.remove("love-text")
        }
    },
    offset: 800
});
