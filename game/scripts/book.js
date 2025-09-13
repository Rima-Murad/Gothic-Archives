const inventoryImg = document.getElementById("book");

inventoryImg.addEventListener("click", () => {
    if (inventoryImg.src.includes("book-closed.png")) {
        inventoryImg.src="../../assets/book-open.png";
    } else {
        inventoryImg.src="../../assets/book-closed.png";
    }
});