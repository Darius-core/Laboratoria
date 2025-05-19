// Tablica z pytaniami
const questions = [
    {
      id: 1,
      pytanie: "Jaki język odpowiada za stylowanie stron internetowych?",
      odp_1: "HTML",
      odp_2: "CSS",
      odp_3: "JavaScript",
      prawidlowa: 2
    },
    {
      id: 2,
      pytanie: "Który język jest językiem znaczników?",
      odp_1: "HTML",
      odp_2: "CSS",
      odp_3: "Python",
      prawidlowa: 1
    },
    {
      id: 3,
      pytanie: "Jakiego języka używa się do tworzenia logiki na stronie?",
      odp_1: "PHP",
      odp_2: "JavaScript",
      odp_3: "SQL",
      prawidlowa: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const answerBtns = document.querySelectorAll(".answer-btn");
  const nextBtn = document.getElementById("next-btn");
  const resultEl = document.getElementById("result");
  
  function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.textContent = q.pytanie;
    answerBtns[0].textContent = q.odp_1;
    answerBtns[1].textContent = q.odp_2;
    answerBtns[2].textContent = q.odp_3;
    answerBtns.forEach(btn => btn.disabled = false);
    nextBtn.style.display = "none";
  }
  
  function checkAnswer(selected) {
    const correct = questions[currentQuestion].prawidlowa;
    if (selected === correct) {
      score++;
    }
  
    answerBtns.forEach((btn, index) => {
      btn.disabled = true;
      if (index + 1 === correct) {
        btn.style.backgroundColor = "#b6fcb6"; // zielony dla poprawnej
      } else if (index + 1 === selected) {
        btn.style.backgroundColor = "#fcb6b6"; // czerwony dla błędnej
      }
    });
  
    nextBtn.style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      resetButtons();
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function resetButtons() {
    answerBtns.forEach(btn => {
      btn.style.backgroundColor = "";
      btn.disabled = false;
    });
    nextBtn.style.display = "none";
  }
  
  function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    resultEl.classList.remove("hidden");
    resultEl.textContent = `Twój wynik: ${score} / ${questions.length}`;
  }
  
  // Start
  loadQuestion();
  