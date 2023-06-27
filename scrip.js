document.addEventListener("DOMContentLoaded", function () {

    //Carssification chamber for tv1

    const leftOne = document.getElementsByClassName("leftOne")[0];
    const rightOne = document.getElementsByClassName("rightOne")[0];
    const carcass = document.getElementsByClassName("carcass1")[0];

    function carcassify() {
        const carcassHeight = carcass.offsetHeight;

        leftOne.style.height = carcassHeight + "px";
        rightOne.style.height = carcassHeight + "px";
        console.log(leftOne.style.height = carcassHeight + "px")
    }

    window.addEventListener('load', carcassify)
    addEventListener("resize", carcassify);

    //Carssification chamber for tv2

    const github = document.getElementsByClassName("github")[0];
    const leftCoding = document.getElementsByClassName("leftCoding")[0];
    const coding = document.getElementsByClassName("coding")[0];
    const pancakeTop = document.getElementsByClassName("pancakeTop")[0];
    const pancakeMiddle = document.getElementsByClassName("pancakeMiddle")[0];
    const pancakeBottom = document.getElementsByClassName("pancakeBottom")[0];
    const carcass2 = document.getElementsByClassName("carcass2")[0];

    function carcassify2() {
        const carcassHeight2 = carcass2.offsetHeight;

        github.style.height = carcassHeight2 + "px";

        leftCoding.style.height = carcassHeight2 + "px";

        coding.style.height = carcassHeight2 + "px";

        pancakeTop.style.height = carcassHeight2 + "px";

        pancakeMiddle.style.height = carcassHeight2 + "px";

        pancakeBottom.style.height = carcassHeight2 + "px";
    }

    window.addEventListener('load', carcassify2)
    addEventListener("resize", carcassify2);
});