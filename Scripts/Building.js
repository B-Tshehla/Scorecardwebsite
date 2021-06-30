function getBuildingPermits() {
    var buildVal = document.getElementById("buildVal").value;
    var bgColor = "";
    var buildScore = 0;
    //inflation
    if (buildVal > 399 && buildVal < 801) {
        bgColor = "#ec7063";

        document.getElementById("build-card").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = " #5d6d7e";
        document.getElementById("buildVal").style.backgroundColor = bgColor;
        document.getElementById("buildScore").style.backgroundColor = bgColor;
        document.getElementById("buiild-card").style.color = "#273746"
        document.getElementById("buildScore").value = buildScore;

    }
    if (buildVal > 1199 && buildVal < 1801) {
        bgColor = "#ec7063";

        document.getElementById("build-card").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = " #5d6d7e";
        document.getElementById("buildVal").style.backgroundColor = bgColor;
        document.getElementById("buildScore").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = "#273746"
        document.getElementById("buildScore").value = buildScore;

    }

    //deflaion

    if (buildVal > 799 && buildVal < 1001) {

        bgColor = "#4287f5";


        document.getElementById("build-card").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = " #5d6d7e";
        document.getElementById("buildVal").style.backgroundColor = bgColor;
        document.getElementById("buildScore").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = "#273746"
        document.getElementById("buildScore").value = buildScore;

    }

    if (buildVal > 1899 && buildVal < 2399) {

        bgColor = "#4287f5";


        document.getElementById("build-card").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = " #5d6d7e";
        document.getElementById("buildVal").style.backgroundColor = bgColor;
        document.getElementById("buildScore").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = "#273746"
        document.getElementById("buildScore").value = buildScore;

    }

}