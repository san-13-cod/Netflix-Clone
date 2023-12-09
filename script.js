const question = document.getElementsByClassName("quest");
const answer = document.getElementsByClassName("answer");
for (let que of question) {
  que.addEventListener("click", function (q) {
    que.nextElementSibling.classList.toggle("active");
  });
}
