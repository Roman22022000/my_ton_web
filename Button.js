const openInputBtn = document.getElementById("open-input-btn");
const closeInputBtn = document.getElementById("close-input-btn");
const inputFieldContainer = document.getElementById("input-field-container");

openInputBtn.addEventListener("click", function() {
	inputFieldContainer.style.display = "block";
});

closeInputBtn.addEventListener("click", function() {
	inputFieldContainer.style.display = "none";
});
