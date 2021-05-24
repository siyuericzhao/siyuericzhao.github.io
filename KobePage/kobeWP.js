
/*
The code below is responsible for the scrolling effect and transitions in Kobe Page. This uses the WayPoints Library.
*/

const kobeCover = document.getElementById("kobe-picture")
const kobeIntro = document.getElementById("kobe-intro")
const number_8 = document.getElementById("number-8")
const number_24 = document.getElementById("number-24")
const kobeText = document.getElementById("kobe-text")
const mamba_mentality = document.getElementById("mamba-mentality")
const five_time = document.getElementById("five-time")
const twenty_years = document.getElementById("20-year")

const kobe_link = document.getElementById("kobe-link")

new Waypoint({
    element: kobeCover,
    handler: function (direction) {
        //console.log(direction)
        if(direction === "down") {

            number_8.classList.add("number-v2")
            number_8.classList.remove("number")

            number_24.classList.add("number-v3")
            number_24.classList.remove("number")

            kobeCover.classList.add("kobe-visible")

        }else {

            number_8.classList.remove("number-v2")
            number_8.classList.add("number")

            number_24.classList.remove("number-v3")
            number_24.classList.add("number")

            kobeCover.classList.remove("kobe-visible")

        }

    },
    offset: 400
});



new Waypoint({
    element: kobeIntro,
    handler: function (direction) {
        //console.log(direction)
        if(direction === "down") {
            mamba_mentality.classList.add("highlight-keywords2")
            mamba_mentality.classList.remove("highlight-keywords")

            five_time.classList.add("highlight-keywords2")
            five_time.classList.remove("highlight-keywords")

            twenty_years.classList.add("highlight-keywords2")
            twenty_years.classList.remove("highlight-keywords")

            kobeText.classList.add("highlight-keywords2")
            kobeText.classList.remove("highlight-keywords")
        }else {
            mamba_mentality.classList.remove("highlight-keywords2")
            mamba_mentality.classList.add("highlight-keywords")

            five_time.classList.remove("highlight-keywords2")
            five_time.classList.add("highlight-keywords")

            twenty_years.classList.remove("highlight-keywords2")
            twenty_years.classList.add("highlight-keywords")

            kobeText.classList.remove("highlight-keywords2")
            kobeText.classList.add("highlight-keywords")
        }
    },
    offset: 400
});







// new Waypoint({
//     element: kobe_link,
//     handler: function (direction) {
//
//         if(direction === "down") {
//             kobe_link.classList.add("dear-basketball-link-fixed");
//             kobe_link.classList.remove("dear-basketball-link");
//         }else {
//             kobe_link.classList.remove("dear-basketball-link-fixed");
//             kobe_link.classList.add("dear-basketball-link");
//         }
//     },
//     offset: 100
// });






// new Waypoint({
//     element: kobe_link,
//     handler: function (direction) {
//
//         if(direction === "down") {
//             kobe_link.classList.remove("dear-basketball-link-fixed");
//             kobe_link.classList.add("dear-basketball-link");
//         }else {
//             kobe_link.classList.add("dear-basketball-link-fixed");
//             kobe_link.classList.remove("dear-basketball-link");
//         }
//     },
//     offset: 400
// });




