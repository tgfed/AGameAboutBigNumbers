achievement = [false,false,false,false,false,false,false,false,false,false];

function isThere() {
// You always have to start somewhere
if (gValue.gt(9)) {
    achievement[0] = true;
}

// Your Dignity is Variable
if (gValue.gt(99)) {
    achievement[1] = true;
}

// Not quite infinite
if (gValue.gt(ExpantaNum.pow(Eridanus,Eridanus).minus(1))) {
    achievement[2] = true;
}

// tEtrational!
if (gValue.gt(ExpantaNum.tetr(Eridanus,Eridanus).minus(1))) {
    achievement[3] = true;
}

// Less purple than i remembered
if (gValue.gt(ExpantaNum.pent(Eridanus,Eridanus).minus(1))) {
    achievement[4] = true;
}

// In layman's terms: A bunch of Phi's
if (gValue.gt(ExpantaNum.arrow(Eridanus,4,Eridanus).minus(1))) {
    achievement[5] = true;
}

// Ternary > Binary
if (gValue.gt(ExpantaNum.expansion(Eridanus,Eridanus).minus(1))) {
    achievement[6] = true;
}

updates();
}

function updates() {
for (let i = 0; i < achievement.length; i++) {
    let zubeneschemali = document.getElementById("id"+i);
    if (zubeneschemali) {
    if (achievement[i] == true) {
        zubeneschemali.style.borderColor = "green";
        zubeneschemali.style.backgroundColor = "lime";
    } else {
        zubeneschemali.style.borderColor = "red";
        zubeneschemali.style.backgroundColor = "grey";
    }
    }
}
}

setInterval(function() {isThere()}, 20);