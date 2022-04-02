let likeContainer = document.getElementById("like-el");
let imageEl = document.getElementById("img-el");

if (likeContainer) {
  likeContainer.addEventListener("click", function () {
    if (
      imageEl.src == "https://imj31us4am50.github.io/imgs/not-liked-icon.png"
    ) {
      imageEl.src = "https://imj31us4am50.github.io/imgs/liked-icon.png";
    } else {
      imageEl.src = "https://imj31us4am50.github.io/imgs/not-liked-icon.png";
    }
  });
}
