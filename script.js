document.getElementById("heart").addEventListener("click", () => {
  // Add the "show" class to trigger the animation
  document.querySelector(".next-screen").classList.add("show");

  // Wait for the animation to complete before redirecting
  setTimeout(() => {
    window.location.href = "https://tejas-mittal.github.io/letter/";
  }, 600); // Match the CSS transition time (0.6s)
});
