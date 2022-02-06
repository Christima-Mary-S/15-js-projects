//using selectors inside the element

// const questions = document.querySelectorAll("question");
// questions.forEach((question) => {
//   const btn = question.querySelector(".question-btn");
//   console.log(btn);
//   btn.addEventListener("click", () => question.classList.toggle("show-text"));
// });

// traversing the dom
const questionButtons = document.querySelectorAll(".question-btn");
questionButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
  });
});
