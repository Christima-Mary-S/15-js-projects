const buttons = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    // console.log(element);
    element.classList.add("active");
  }
});
