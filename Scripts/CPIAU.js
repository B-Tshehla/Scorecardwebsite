function getCPIAUScore() {
    var cpiAUVal = document.getElementById("cpiAUVal").value;

    if (cpiAUVal > 0.3) {
        inflation();
        alert(greaterthan03());
        //document.getElementById("cpiAUScore").value = greaterthan03();
    }


}

function inflation() {
    bgColor = "#ec7063";

    document.getElementById("cpiaAU-card").style.backgroundColor = bgColor;
    document.getElementById("cpiaAU-card").style.color = " #5d6d7e";
    document.getElementById("cpiAUVal").style.backgroundColor = bgColor;
    document.getElementById("cpiAUScore").style.backgroundColor = bgColor;
    document.getElementById("cpiaAU-card").style.color = "#273746"
}

function deflation() {
    bgColor = "#4287f5";

    document.getElementById("cpiaAU-card").style.backgroundColor = bgColor;
    document.getElementById("cpiaAU-card").style.color = " #5d6d7e";
    document.getElementById("cpiAUVal").style.backgroundColor = bgColor;
    document.getElementById("cpiAUScore").style.backgroundColor = bgColor;
    document.getElementById("cpiaAU-card").style.color = "#273746"
}

//CPIAUCSL PROCESSING 

function greaterthan03() {
    var cpiAUVal = document.getElementById("cpiAUVal").value;

    if (cpiAUVal > 1.3) {
        return 3;
    }
    if (value < 1.3 && cpiAUVal > 1) {
        return 6;
    }
    if (cpiAUVal < 1.1 && cpiAUVal > 0.8) {
        return 10;
    }
    if (cpiAUVal < 0.7 && cpiAUVal > 0.6) {
        return 8;
    }
    if (cpiAUVal < 0.5 && cpiAUVal > 0.4) {
        return 6;
    }
    if (cpiAUVal < 0.3) {
        return 4;
    }
}