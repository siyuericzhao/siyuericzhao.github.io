const area1 = document.getElementById("area1")
const area2 = document.getElementById("area2")
const area3 = document.getElementById("area3")
const newsheriffintro = document.getElementById("new-sheriff-intro")

const text1 = document.getElementById("anthony-davis-text")
const text2 = document.getElementById("kevin-durant-text")
const text3 = document.getElementById("kawhi-leonard")

const ad_name = document.getElementById("anthony-davis-text1")
const kd_name = document.getElementById("kevin-durant-text1")
const kawhi_name = document.getElementById("kawhi-leonard-text1")


const ad_graph = document.getElementById("area1")
const kd_graph = document.getElementById("area2")
const kawhi_graph = document.getElementById("area3")


const highlight_sheriff = document.getElementById("sheriff")
const highlight_ad = document.getElementById("anthony-davis")
const highlight_kd = document.getElementById("kevin-durant")
const highlight_kawhi = document.getElementById("kawhi-leonard")
const highlight_lakers = document.getElementById("laker-first")
const highlight_clippers = document.getElementById("clippers-first")
const highlight_nets = document.getElementById("nets-first")


const introNewSheriff = new Waypoint({
    element: newsheriffintro,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            highlight_sheriff.classList.add("highlight-keywords2")
            highlight_sheriff.classList.remove("highlight-keywords")
            highlight_ad.classList.add("highlight-keywords2")
            highlight_ad.classList.remove("highlight-keywords")
            highlight_kd.classList.add("highlight-keywords2")
            highlight_kd.classList.remove("highlight-keywords")
            highlight_kawhi.classList.add("highlight-keywords2")
            highlight_kawhi.classList.remove("highlight-keywords")

            highlight_lakers.classList.add("purple")
            highlight_nets.classList.add("blue")
            highlight_clippers.classList.add("red")

        }else {
            highlight_sheriff.classList.remove("highlight-keywords2")
            highlight_sheriff.classList.add("highlight-keywords")
            highlight_ad.classList.remove("highlight-keywords2")
            highlight_ad.classList.add("highlight-keywords")
            highlight_kd.classList.remove("highlight-keywords2")
            highlight_kd.classList.add("highlight-keywords")
            highlight_kawhi.classList.remove("highlight-keywords2")
            highlight_kawhi.classList.add("highlight-keywords")

            highlight_lakers.classList.remove("purple")
            highlight_nets.classList.remove("blue")
            highlight_clippers.classList.remove("red")
        }

    },
    offset: 500
});







const firstWP = new Waypoint({
    element: area1,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            // text1.classList.add("seen");
            // text1.classList.remove("none");
            // ad_name.classList.add("seen")
            // ad_name.classList.remove("none");
            ad_graph.classList.add("seen");
            ad_graph.classList.remove("none");

        }else {
            // text1.classList.add("none");
            // text1.classList.remove("seen");
            // ad_name.classList.add("none")
            // ad_name.classList.remove("seen");
            ad_graph.classList.add("none");
            ad_graph.classList.remove("seen");
        }

    },
    offset: 500
});



const secondWP = new Waypoint({
    element: area2,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            // text2.classList.add("seen");
            // text2.classList.remove("none");
            // kd_name.classList.add("seen")
            // kd_name.classList.remove("none");
            kd_graph.classList.add("seen");
            kd_graph.classList.remove("none");
        }else {
            // text2.classList.add("none");
            // text2.classList.remove("seen");
            // kd_name.classList.add("none")
            // kd_name.classList.remove("seen");
            kd_graph.classList.add("none");
            kd_graph.classList.remove("seen");
        }

    },
    offset: 500
});



const thirdWP = new Waypoint({
    element: area3,
    handler: function (direction) {
        console.log(direction)
        if(direction === "down") {
            // text3.classList.add("seen");
            // text3.classList.remove("none");
            // kawhi_name.classList.add("seen")
            // kawhi_name.classList.remove("none");
            kawhi_graph.classList.add("seen");
            kawhi_graph.classList.remove("none");
        }else {
            // text3.classList.add("none");
            // text3.classList.remove("seen");
            // kawhi_name.classList.add("none")
            // kawhi_name.classList.remove("seen");
            kawhi_graph.classList.add("none");
            kawhi_graph.classList.remove("seen");
        }

    },
    offset: 500
});