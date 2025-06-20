document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("description");
  function autoResize() {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }
  textarea.addEventListener("input", autoResize);
  autoResize();
});
