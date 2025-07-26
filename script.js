function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  const upload = document.getElementById("upload");
  const galleryGrid = document.getElementById("galleryGrid");

  if (upload && galleryGrid) {
    upload.addEventListener("change", (e) => {
      const files = e.target.files;
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = document.createElement("img");
          img.src = event.target.result;
          galleryGrid.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  }
});
