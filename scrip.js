document.addEventListener("DOMContentLoaded", function () {

    const leftOne = document.getElementsByClassName("leftOne")[0];
    const rightOne = document.getElementsByClassName("rightOne")[0];
    const carcass = document.getElementsByClassName("carcass1")[0];

    const github = document.getElementsByClassName("github")[0];
    const leftCoding = document.getElementsByClassName("leftCoding")[0];
    const coding = document.getElementsByClassName("coding")[0];
    const pancakeTop = document.getElementsByClassName("pancakeTop")[0];
    const pancakeMiddle = document.getElementsByClassName("pancakeMiddle")[0];
    const pancakeBottom = document.getElementsByClassName("pancakeBottom")[0];
    const carcass2 = document.getElementsByClassName("carcass2")[0];

    const gallery = document.getElementsByClassName("tv3")[0];
    const modal = document.getElementsByClassName("modal")[0];
    const modalImg = document.getElementsByClassName("modalImg")[0];

    const folderBg = document.getElementsByClassName("folderBg")[0];
    const folderBgPix = document.getElementsByClassName("folderBg")[1];
    const folderBgAI = document.getElementsByClassName("folderBg")[2];
    const designBg = document.getElementsByClassName("imageGallery")[0];
    const designBgPix = document.getElementsByClassName("imageGalleryPix")[0];
    const designBgAI = document.getElementsByClassName("imageGalleryAI")[0];
    const leftFolder = document.getElementsByClassName("leftFolder")[0];
    const leftFolderPix = document.getElementsByClassName("leftFolder")[1];
    const leftFolderAI = document.getElementsByClassName("leftFolder")[2];
    const rightFolder = document.getElementsByClassName("rightFolder")[0];
    const rightFolderPix = document.getElementsByClassName("rightFolder")[1];
    const rightFolderAI = document.getElementsByClassName("rightFolder")[2];

    const blankReal = document.getElementsByClassName("blank")[0];
    const blankReal1 = document.getElementsByClassName("blank")[1];

    const designTxt = document.getElementsByClassName("designTxt")[0];

    let blankPlaceholder;

    function carcassify123() {
        const carcassHeight = carcass.offsetHeight;
        const carcassHeight2 = carcass2.offsetHeight;

        leftOne.style.height = carcassHeight + "px";
        rightOne.style.height = carcassHeight + "px";

        github.style.height = carcassHeight2 + "px";
        leftCoding.style.height = carcassHeight2 + "px";
        coding.style.height = carcassHeight2 + "px";
        pancakeTop.style.height = carcassHeight2 + "px";
        pancakeMiddle.style.height = carcassHeight2 + "px";
        pancakeBottom.style.height = carcassHeight2 + "px";

        gallery.style.height = carcassHeight2 + "px";
    }

    window.addEventListener('load', carcassify123)
    addEventListener("resize", carcassify123);

    function modalAppear(evt) {
        if (evt.target === folderBg || evt.target === folderBgPix || evt.target === designBg || evt.target === designBgPix
            || evt.target === designBgAI || evt.target === folderBgAI || evt.target === blankReal || evt.target === blankReal1 || evt.target === designTxt) {
            return
        }
        if (evt.target === leftFolder) {
            designBg.style.display = "none";
            designBgPix.style.display = "grid";
            return;
        }
        if (evt.target === rightFolder) {
            designBg.style.display = "none";
            designBgAI.style.display = "grid";
            return;
        }

        if (evt.target === leftFolderPix) {
            designBg.style.display = "grid";
            designBgPix.style.display = "none";
            return;
        }
        if (evt.target === rightFolderPix) {
            designBgPix.style.display = "none";
            designBgAI.style.display = "grid";
            return;
        }
        if (evt.target === leftFolderAI) {
            designBgAI.style.display = "none";
            designBgPix.style.display = "grid";
            return;
        }
        if (evt.target === rightFolderAI) {
            designBgAI.style.display = "none";
            designBg.style.display = "grid";
            return;
        }

        blankPlaceholder = evt.target.getAttribute("src");
        modal.style.display = "initial";

        try {
            modalImg.src = blankPlaceholder;
        } catch (SyntaxError) {
            // do nothing if clicked on background or something
        }
    }

    function poof() {
        modal.style.display = "none";
    }

    gallery.addEventListener("click", modalAppear, false);
    modal.addEventListener("click", poof);

    const yesAnsw = document.getElementById("yesAnsw");
    const noAnsw = document.getElementById("noAnsw");
    const modal2 = document.getElementById("modal2")
    const popUp = document.getElementById("popUp")
    const audioWind = new Audio("audio/yoinked.mp3");

    let onOffAudioReal = localStorage["onOffAudio"];
    console.log(onOffAudioReal)

    if (onOffAudioReal === "true") {
        console.log("real")
    }

    if (onOffAudioReal === "true") {
        audioWind.play()
        modal2.style.display = "none";
        popUp.style.display = "none";
        console.log("megastonk")
    }
    if (onOffAudioReal === "false") {
        modal2.style.display = "none";
        popUp.style.display = "none";
        console.log("Audio turned off automatically (you can turn it on in the bottom)")
    }

    audioWind.volume = 0.2;

    function closeYesEnable() {
        localStorage["onOffAudio"] = "true";

        audioWind.play()
        modal2.style.display = "none";
        popUp.style.display = "none";
        console.log(audioWind.muted)
    }

    function closeNo() {
        localStorage["onOffAudio"] = "false";
        modal2.style.display = "none";
        popUp.style.display = "none";
    }

    yesAnsw.addEventListener("click", closeYesEnable)
    noAnsw.addEventListener("click", closeNo)
});