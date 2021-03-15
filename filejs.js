let imagesSrc = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg",
    "bg5.jpg"
]

let contBulltes = document.querySelector(".contBulltes");

let contImag = document.querySelector(".containner .contImag");

let backImg = document.querySelector(".backImg");

let nextIco = document.querySelector(".containner .next");
let prevIco = document.querySelector(".containner .prev");

let indexImg = 0;

// creating function 

window.onload = creating()

function creating() {

    "use strict";

    let conEll = document.createElement("div");
    conEll.className = "con";
    contBulltes.appendChild(conEll)
    for (var i = 0; i < imagesSrc.length; i++) {

        let crSpn = document.createElement("span");
        crSpn.dataset.st = i;
        conEll.appendChild(crSpn);
    }

    conEll.firstElementChild.classList.add("active")
    let allSpn = document.querySelectorAll(".con span");


    function nextImg(nextEl, prevEl) {

        "use strict";

        nextEl.addEventListener("click", function (e) {

            e.stopPropagation();

            if (e.target.className === "next") {

                indexImg = indexImg + 1;
                moving()
                allSpn.forEach(ell => {

                    if (ell.dataset.st == indexImg) {

                        removing(ell, allSpn)

                    }

                })

                if (indexImg === (imagesSrc.length - 1)) {

                    e.target.classList.add("noDrop");

                } else {

                    prevIco.classList.remove("noDrop")

                }


            }

        })

        prevEl.addEventListener("click", function (e) {

            e.stopPropagation();

            if (e.target.className === "prev") {

                indexImg = indexImg - 1;
                checking(e.target);
                moving()
                allSpn.forEach(ell => {

                    if (ell.dataset.st == indexImg) {

                        removing(ell, allSpn)

                    }

                })

                if (indexImg === parseInt(0)) {

                    e.target.classList.add("noDrop")

                } else {

                    nextIco.classList.remove("noDrop")

                }

            }
        })

    }

    nextImg(nextIco, prevIco)

    allSpn.forEach(ell => {

        ell.addEventListener("click", function (e) {

            indexImg = parseInt(e.target.dataset.st);
            removing(e.target, allSpn)
            e.target.classList.add("active")
            moving()


            if (indexImg === (imagesSrc.length - 1)) {

                nextIco.classList.add("noDrop");
                prevIco.classList.remove("noDrop");

            }
            else if (indexImg === parseInt(0)) {

                prevIco.classList.add("noDrop");
                nextIco.classList.remove("noDrop");

            }
            else {

                nextIco.classList.remove("noDrop")
                prevIco.classList.remove("noDrop")

            }



        })


    })

}

function checking(ellTarget) {

    "use strict";
    ellTarget.addEventListener("click", function (e) {

        if (indexImg === (imagesSrc.length - 1)) {

            nextIco.classList.add("noDrop");
            console.log("yes" + indexImg + " " + (imagesSrc.length - 1))

        } else {

            prevIco.classList.remove("noDrop")

        }
        if (indexImg === parseInt(0)) {

            prevIco.classList.add("noDrop")
            console.log("yes" + indexImg + " " + (imagesSrc.length - 1))

        } else {

            nextIco.classList.remove("noDrop")

        }


    })
}



function removing(clickEll, removAllEll) {

    "use strict";
    removAllEll.forEach(elR => {

        elR.classList.remove("active")

    })


    clickEll.classList.add("active");


}

function moving() {

    "use strict";
    for (let i = 0; i < imagesSrc.length; i++) {

        contImag.style.backgroundImage = `url(images/${imagesSrc[indexImg]}`
        backImg.style.backgroundImage = `url(images/${imagesSrc[indexImg]}`

    }

}




