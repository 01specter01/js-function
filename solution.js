function istGeradeZahl(zahl) {
    if (zahl % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(istGeradeZahl(3), "soll false sein");
console.log(istGeradeZahl(10), "soll true sein");
console.log(istGeradeZahl(7), "soll false sein");
console.log(istGeradeZahl(40), "soll true sein");
