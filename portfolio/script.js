var modal = document.getElementById("myModal");
var modalImage = document.getElementById("img01");
var captionText = document.getElementById("caption");

// text image modal
var img = document.getElementById("myImg");
img.onclick = function () {
    modal.style.display = "block";
    modalImage.src = this.src;
    captionText.innerHTML = this.alt;
}

// resume modal
var resume = document.getElementById("resumeImg")
resume.onclick = function () {
    modal.style.display = "block";
    modalImage.src = this.src;
    captionText.innerHTML = this.alt;
}

// X button
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none"
}

