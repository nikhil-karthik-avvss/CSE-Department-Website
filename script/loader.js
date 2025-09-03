window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 1500); // 1.5 sec delay to simulate loading
});
