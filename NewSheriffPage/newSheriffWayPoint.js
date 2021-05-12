const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")


// const firstWP = new Waypoint({
//     element: one,
//     handler: function (direction) {
//         console.log(direction)
//     },
//     offset: -100
// });
//
//
// const secondWP = new Waypoint({
//     element: two,
//     handler: function (direction) {
//         console.log("2nd waypoint")
//     },
//     offset: 100
// });


// const firstWP = new Waypoint({
//     element: one,
//     handler: function (direction) {
//         if(direction === "down") {
//             one.classList.add("sticky")
//
//             one.classList.remove("one")
//
//         }else if(direction === "up") {
//             one.classList.remove("sticky")
//             one.classList.add("one")
//         }
//     },
//     offset: 100
// });



// const secondWP = new Waypoint({
//     element: two,
//     handler: function (direction) {
//         if(direction === "down") {
//             two.classList.add("sticky")
//
//             two.classList.remove("two")
//
//         }else if(direction === "up") {
//             two.classList.remove("sticky")
//             two.classList.add("two")
//         }
//     },
//     offset: 100
// });
//
//
//
// const thirdWP = new Waypoint({
//     element: three,
//     handler: function (direction) {
//         if(direction === "down") {
//             three.classList.add("sticky")
//
//             three.classList.remove("three")
//
//         }else if(direction === "up") {
//             three.classList.remove("sticky")
//             three.classList.add("three")
//         }
//     },
//     offset: 100
// });





var newSheriffSectionEl = document.getElementsByClassName('new-sheriff-section').item(0)
var newSheriffTextSectionEl = document.getElementsByClassName('new-sheriff-text').item(0)
var newSheriffTextBoxEls = document.getElementsByClassName('text-box')


var newSheriffGraphContainerEl = document
    .getElementsByClassName('three-player-graph-container')
    .item(0)

var adGraphEl = document.getElementById('anthony-davis-graph-svg')
var kdGraphEl = document.getElementById('kevin-durant-graph-svg')
var kawhiGraphEl = document.getElementById('kawhi-leonard-graph-svg')



new Waypoint({
    element: newSheriffSectionEl,
    handler: function (direction) {
        if (direction == 'down') {
            newSheriffGraphContainerEl.classList.add('is-fixed')
            newSheriffTextBoxEls.item(0).classList.add('seen')

        } else {
            newSheriffGraphContainerEl.classList.remove('is-fixed')
            newSheriffTextBoxEls.item(0).classList.remove('seen')

        }
    },
    offset: -120
})


new Waypoint({
    element: newSheriffTextBoxEls.item(2),
    handler: function (direction) {
        if (direction == 'down') {
            newSheriffGraphContainerEl.classList.remove('is-fixed')
            newSheriffGraphContainerEl.classList.add('is-bottom')
        } else {
            newSheriffGraphContainerEl.classList.add('is-fixed')
            newSheriffGraphContainerEl.classList.remove('is-bottom')
        }
    },
    offset: -100
})



new Waypoint({
    element: newSheriffTextBoxEls.item(0),
    handler: function (direction) {
        if (direction == 'down') {
            adGraphEl.setAttribute('display', 'none')
            kdGraphEl.setAttribute('display', 'block')
            newSheriffTextBoxEls.item(0).classList.remove('seen')
            newSheriffTextBoxEls.item(1).classList.add('seen')

        } else {
            adGraphEl.setAttribute('display', 'block')
            kdGraphEl.setAttribute('display', 'none')
            newSheriffTextBoxEls.item(0).classList.add('seen')
            newSheriffTextBoxEls.item(1).classList.remove('seen')

        }
    },
    offset: -400
})



new Waypoint({
    element: newSheriffTextBoxEls.item(1),
    handler: function (direction) {
        if (direction == 'down') {
            kawhiGraphEl.setAttribute('display', 'block')
            kdGraphEl.setAttribute('display', 'none')
            newSheriffTextBoxEls.item(1).classList.remove('seen')
            newSheriffTextBoxEls.item(2).classList.add('seen')

        } else {
            kawhiGraphEl.setAttribute('display', 'none')
            kdGraphEl.setAttribute('display', 'block')
            newSheriffTextBoxEls.item(1).classList.add('seen')
            newSheriffTextBoxEls.item(2).classList.remove('seen')

        }
    },
    offset: -300
})