var imageBtn = document.getElementById("image-btn");
var popupContainer = document.getElementById("popup-container");
var closeBtn = document.getElementById("close-btn");

imageBtn.addEventListener("click", function() {
	popupContainer.style.display = "block";
});

closeBtn.addEventListener("click", function() {
	popupContainer.style.display = "none";
});
