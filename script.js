const faq = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
    open: true,
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
    open: false,
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    open: false,
  },
];

const questions = document.getElementsByClassName("questions");

Object.values(questions).map((question, i) => {
  question.id = i;
  question.addEventListener("click", onClickQuestion);
  question.firstElementChild.innerText = faq[i].question;

  if (faq[i].open) {
    question.classList.add("revealed");
    question.firstElementChild.classList.add("rotate");
    question.lastElementChild.classList.add("revealed");
    question.lastElementChild.children[0].innerText = faq[i].answer;
  }
});

function onClickQuestion(event) {
  const curr = event.currentTarget;

  if (faq[curr.id].open) {
    faq[curr.id].open = false;

    curr.classList.remove("revealed");
    curr.firstElementChild.classList.remove("rotate");
    curr.lastElementChild.classList.remove("revealed");
    curr.lastElementChild.children[0].innerText = "";
  } else {
    faq[curr.id].open = true;

    curr.classList.add("revealed");
    curr.firstElementChild.classList.add("rotate");
    curr.lastElementChild.classList.add("revealed");
    curr.lastElementChild.children[0].innerText = faq[curr.id].answer;
  }
}
