function getBuildingPermits() {
    var buildVal = document.getElementById("buildVal").value;
    var bgColor = "";
    var buildScore = 0;
    //inflation
    if (buildVal > 399 && buildVal < 800) {
        bgColor = "#ec7063";
        buildScore = between400and700();

        document.getElementById("build-card").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = " #5d6d7e";
        document.getElementById("buildVal").style.backgroundColor = bgColor;
        document.getElementById("buildScore").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = "#273746"
        document.getElementById("buildScore").value = buildScore;


    }
    if (buildVal > 1199 && buildVal < 1900) {
        bgColor = "#ec7063";
        buildScore = between1200and1800();

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

        buildScore = between800and1000();

        document.getElementById("build-card").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = " #5d6d7e";
        document.getElementById("buildVal").style.backgroundColor = bgColor;
        document.getElementById("buildScore").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = "#273746"
        document.getElementById("buildScore").value = buildScore;

    }

    if (buildVal > 1899) {

        bgColor = "#4287f5";

        buildScore = between1900and2400();

        document.getElementById("build-card").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = " #5d6d7e";
        document.getElementById("buildVal").style.backgroundColor = bgColor;
        document.getElementById("buildScore").style.backgroundColor = bgColor;
        document.getElementById("build-card").style.color = "#273746"
        document.getElementById("buildScore").value = buildScore;

    }
    if (buildVal > 1000 && buildVal < 1200) {

        buildScore = 0;
        document.getElementById("buildScore").value = buildScore;

    }

}

//inflation Score proccessing

function between400and700() {
    var buildVal = document.getElementById("buildVal").value;


    if (buildVal > 399 && buildVal < 700) {

        return 10;
    }
    if (buildVal > 699 && buildVal < 800) {

        return 7;
    } else {
        return 0;
    }
}

function between1200and1800() {
    var buildVal = document.getElementById("buildVal").value;
    //const buildScale = [1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900];
    //const score = [2, 3, 4, 5, 8, 9, 10];
    /*
        for (var x = 0; x < 7; x++) {

            if (buildVal > buildScale[x] && buildVal < buildVal[x + 1]) {
                alert(score[x]);
            }
        }
        */

    if (buildVal > 1199 && buildVal < 1300) {
        return 2;
    }
    if (buildVal > 1299 && buildVal < 1400) {
        return 3;
    }
    if (buildVal > 1399 && buildVal < 1500) {
        return 4;
    }
    if (buildVal > 1499 && buildVal < 1600) {
        return 5;
    }
    if (buildVal > 1599 && buildVal < 1700) {
        return 8;
    }
    if (buildVal > 1699 && buildVal < 1800) {
        return 9;
    }
    if (buildVal > 1799 && buildVal < 1900) {
        return 10;
    }
}

function between800and1000() {
    var buildVal = document.getElementById("buildVal").value;

    if (buildVal > 799 && buildVal < 900) {
        return -8
    }
    if (buildVal > 899 && buildVal < 1000) {
        return -5
    }
    if (buildVal == 1000) {
        return -3;
    }
}

function between1900and2400() {
    var buildVal = document.getElementById("buildVal").value;

    if (buildVal > 1899 && buildVal < 2000) {
        return -7
    }
    if (buildVal > 1999 && buildVal < 2100) {
        return -9;
    }
    if (buildVal > 2100) {
        return -10;
    }
}