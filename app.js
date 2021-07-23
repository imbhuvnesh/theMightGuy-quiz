document.addEventListener("DOMContentLoaded", () => {
  const QUESTIONS = [
    {
      question: "What is the name of the stuffed lion in Bleach?",
      correct_answer: "Kon",
      ans: ["Rukia", "Renji", "Kon", "Jinta"],
    },
    {
      question: "Who Possess the founding titan in Attack on Titan?",
      correct_answer: "Eren Yeager",
      ans: ["Eren Yeager", "Mikasa", "Levi", "Kenny Ackerman"],
    },
    {
      question:
        "What jutsu did Madara use on the moon in Fourth great Shinobi war?",
      correct_answer: "Infinite Tsukoyomi",
      ans: [
        "Amatarasu",
        "Particle Dismantaling",
        "Kage-Bushin",
        "Infinite Tsukoyomi",
      ],
    },
    {
      question:
        "The name of the attack &quot;Kamehameha&quot; in D…n Ball Z was named after a famous king of Hawaii.?",
      correct_answer: "True",
      ans: ["True", "False"],
    },
    {
      question: "What year did &quot;Attack on Titan&quot; first air?",
      correct_answer: "2013",
      ans: ["2017", "2013", "2019", "2012"],
    },
  ];

  let count = 0;
  let i = 0;
  function showQuestion(i) {
    let question = document.getElementById("question");
    let options = document.getElementById("options");
    question.textContent = QUESTIONS[i].question;
    QUESTIONS[i].ans.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = element;
      li.setAttribute("ans", li.textContent);
      li.addEventListener("click", checkAnswer);

      options.appendChild(li);
    });
  }

  function checkAnswer() {
    let ans = this.getAttribute("ans");
    if (QUESTIONS[i].correct_answer === ans) {
      alert("Correct!");
      count += 1;
    }
    i++;
    document.getElementById("options").textContent = "";
    if (i < QUESTIONS.length) {
      showQuestion(i);
    } else {
      document.getElementById(
        "question"
      ).textContent = `Your Score is ${count}/${QUESTIONS.length}`;
        let gif = document.createElement("img");
        let res = document.createElement("h2");
        gif.style.margin = "30px 20px";
      if (count > 3) {
          gif.setAttribute("src", "./mightguy.gif");
          res.textContent = "Power of youth!"
      } else {
          gif.setAttribute("src", "./mightguy2.gif");
          res.textContent = "You can do better Lee! Don't let your spring time of youth fade away!"
      }
        document.getElementById('main').appendChild(gif);
        document.getElementById('main').appendChild(res);
    }
  }
  showQuestion(i);
});
