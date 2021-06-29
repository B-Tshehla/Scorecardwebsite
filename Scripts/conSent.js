//Consumer sentiment index/Connsumer confidence

function getConsumerSent() {
    var conVal = document.getElementById("conSent").value;
    var conScore = 0;
    var bgColor = " ";
    //inflation
    if (conVal > 54 && conVal < 63) {
        bgColor = "#ec7063";

        conScore = between55and62();
        document.getElementById("conSent-card").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = " #5d6d7e";
        document.getElementById("conSent").style.backgroundColor = bgColor;
        document.getElementById("conSntScore").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = "#273746"
        document.getElementById("conSntScore").value = conScore;

    }
    if (conVal > 75 && conVal < 96) {
        bgColor = "#ec7063";

        conScore = between75and95();
        document.getElementById("conSent-card").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = " #5d6d7e";
        document.getElementById("conSent").style.backgroundColor = bgColor;
        document.getElementById("conSntScore").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = "#273746"
        document.getElementById("conSntScore").value = conScore;
    }

    //deflation

    if (conVal > 62 && conVal < 73) {
        bgColor = "#4287f5";
        document.getElementById("conSent-card").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = " #5d6d7e";
        document.getElementById("conSent").style.backgroundColor = bgColor;
        document.getElementById("conSntScore").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = "#273746"
        document.getElementById("conSntScore").value = score;

    }
    if (conVal > 95 && conVal < 95) {
        bgColor = "#4287f5";
        document.getElementById("conSent-card").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = " #5d6d7e";
        document.getElementById("conSent").style.backgroundColor = bgColor;
        document.getElementById("conSntScore").style.backgroundColor = bgColor;
        document.getElementById("conSent-card").style.color = "#273746"
        document.getElementById("conSntScore").value = score;

    }
}

function between55and62() {
    var conVal = document.getElementById("conSent").value;


    if (conVal == 55 || conVal == 56) {
        return 10;
    }

    if (conVal == 57 || conVal == 58) {

        return 9;

    }
    if (conVal == 59) {
        return 8;
    }
    if (conVal == 60) {
        return 7;
    }
    if (conVal == 61) {
        return 6;
    }
    if (conVal == 62) {
        return 5;
    }
}

function between75and95() {

    var conVal = document.getElementById("conSent").value;

    if (conVal == 76 || conVal == 77) {
        return 1;
    }
    if (conVal == 78 || conVal == 79) {
        return 2;
    }
    if (conVal == 80 || conVal == 81) {
        return 3;
    }
    if (conVal == 82 || conVal == 83) {
        return 4;
    }
    if (conVal == 84 || conVal == 85) {
        return 5;
    }
    if (conVal == 86 || conVal == 87) {
        return 6;
    }
    if (conVal == 88 || conVal == 89) {
        return 7;
    }
    if (conVal == 90 || conVal == 91) {
        return 8;
    }
    if (conVal == 92 || conVal == 93) {
        return 9;
    }
    if (conVal == 94 || conVal == 95) {
        return 10;
    }

}