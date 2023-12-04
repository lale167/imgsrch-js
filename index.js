const inputBox = document.querySelector(".input");
const searchIcon = document.querySelector(".input-icon");
const imgContainer = document.querySelector(".img-container");

const unsplash =
   "https://api.unsplash.com/search/photos/?client_id=noSaT-8QLCaFOUEpgun4Jlf-WEngCUVNG7Q6QT6R2JE";

searchIcon.addEventListener("click", getImages);
inputBox.addEventListener("keydown", (e) => {
   if (e.key === "Enter") getImages();
});

function getImages() {
   imgContainer.innerHTML = "";

   const link = unsplash + `&query=${inputBox.value}`;
   fetch(link)
      .then((data) => data.json())
      .then((data) => {
         data.results.forEach((element) => {
            let img = document.createElement("img");
            img.src = element.links.download;
            img.className = "img";
            imgContainer.appendChild(img);
            img.addEventListener("click", () => {
               window.open(img.src);
            });
         });
      });
}
