const faq = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
  },
];

const questions = document.getElementsByClassName("questions");

Object.values(questions).map((question, i) => {
  question.addEventListener("click", onClickQuestion);
  question.firstElementChild.innerText = faq[i].question;
  if (i === 0) {
    question.firstElementChild.classList.add("rotate");
    question.lastElementChild.innerText = faq[i].answer;
  }
});

function onClickQuestion(event) {
  const curr = event.currentTarget;
  if (curr.lastElementChild.innerText.length > 0) {
    curr.firstElementChild.classList.remove("rotate");
    curr.lastElementChild.innerText = "";
  } else {
    faq.forEach((faq) => {
      if (curr.innerText === faq.question) {
        curr.firstElementChild.classList.add("rotate");
        curr.lastElementChild.innerText = faq.answer;
      }
    });
  }
}
