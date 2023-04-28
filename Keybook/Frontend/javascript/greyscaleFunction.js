function toggleGrayScale() {
    var currFilter = document.body.style.filter;
    if (currFilter === "grayscale(100%)") {
        document.body.style.filter = "none";
    } else {
        document.body.style.filter = "grayscale(100%)";
    }
}