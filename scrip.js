document.addEventListener("DOMContentLoaded", function () {
    const wdw = document.getElementById("wdw");

    function windowOpen() {
        wdw.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
        console.log(wdw.style.backgroundSize)
    }

    // windowOpen();
});