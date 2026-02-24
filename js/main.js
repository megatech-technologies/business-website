document.addEventListener("DOMContentLoaded", function () {

  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach(drop => {
    const btn = drop.querySelector("button");

    btn.addEventListener("click", function (e) {
      e.stopPropagation();

      dropdowns.forEach(d => {
        if (d !== drop) d.classList.remove("active");
      });

      drop.classList.toggle("active");
    });
  });

  document.body.addEventListener("click", function () {
    dropdowns.forEach(d => d.classList.remove("active"));
  });

});

//themes

document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("themeToggle");
  const icon = btn.querySelector("i");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light");
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }

  // Toggle theme
  btn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      icon.className = "fa-solid fa-sun";
    } else {
      localStorage.setItem("theme", "dark");
      icon.className = "fa-solid fa-moon";
    }

  });

});

  const images = document.querySelectorAll(".album-item img");
  const preview = document.getElementById("imagePreview");
  const previewImg = document.getElementById("previewImg");
  const closeBtn = document.querySelector(".close-preview");

  images.forEach(img => {
    img.addEventListener("click", () => {
      preview.classList.add("active");
      previewImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    preview.classList.remove("active");
  });

  preview.addEventListener("click", (e) => {
    if (e.target === preview) {
      preview.classList.remove("active");
    }
  });

