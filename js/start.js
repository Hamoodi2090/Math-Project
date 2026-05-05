const questions = [
    {
        question: "عدد طرق تكوين عدد مكون من 3 أرقام من الأرقام 2,3,4,5 إذا سُمح بتكرار الرقم هو؟",
        options: ["120 طريقة", "48 طريقة", "64 طريقة", "24 طريقة"],
        correct_answer: "64 طريقة"
    },
    {
        question: "عدد طرق تكوين عدد مكون من 3 أرقام من الأرقام 5,6,7,8 إذا لم يُسمح بتكرار الرقم هو؟",
        options: ["120 طريقة", "48 طريقة", "64 طريقة", "24 طريقة"],
        correct_answer: "24 طريقة"
    },
    {
        question: "قائمة طعام فيها 5 أطباق رئيسية و 4 أنواع حساء و 3 أنواع حلوى، عدد الطلبات المختلفة الممكنة هو؟",
        options: ["20", "120", "64", "60"],
        correct_answer: "60"
    },
    {
        question: "5! = ؟",
        options: ["24", "120", "720", "5"],
        correct_answer: "120"
    },
    {
        question: "80! ÷ 79! = ؟",
        options: ["80!", "1", "80/79", "80"],
        correct_answer: "80"
    },
    {
        question: "76! ÷ 75! = ؟",
        options: ["75/76", "1/76", "76", "1/76!"],
        correct_answer: "76"
    },
    {
        question: "₅P₂ = ؟",
        options: ["10", "5", "20", "40"],
        correct_answer: "20"
    },
    {
        question: "من 10 أعضاء مجلس إدارة يُراد اختيار رئيس ونائب رئيس وأمين سر، عدد طرق الاختيار هو؟",
        options: ["720 طريقة", "120 طريقة", "10 طرق", "30 طريقة"],
        correct_answer: "720 طريقة"
    },
    {
        question: "إذا كانت ₙP₂ = 72 فإن قيمة n تساوي؟",
        options: ["6", "7", "8", "9"],
        correct_answer: "9"
    },
    {
        question: "إذا كانت (n-1)! = 5040 فإن n تساوي؟",
        options: ["6", "7", "8", "9"],
        correct_answer: "8"
    },
    {
        question: "₅C₃ = ؟",
        options: ["60", "10", "15", "5/3"],
        correct_answer: "10"
    },
    {
        question: "عدد طرق اختيار 3 طلاب من 7 طلاب لتمثيل المدرسة في مسابقة هو؟",
        options: ["₇C₃", "₇P₃", "7!", "₃C₇"],
        correct_answer: "₇C₃"
    },
    {
        question: "صندوق فيه 7 كرات زرقاء و 6 حمراء و 2 بيضاء و 3 سوداء، احتمال سحب كرة حمراء هو؟",
        options: ["1/9", "1/6", "1/3", "7/18"],
        correct_answer: "1/3"
    },
    {
        question: "قُسّم قرص إلى 8 قطاعات متساوية مرقمة 1-8، احتمال أن يستقر المؤشر على عدد فردي هو؟",
        options: ["1/8", "3/8", "5/8", "1/2"],
        correct_answer: "1/2"
    },
    {
        question: "كيس فيه كرتان زرقاوتان و 9 كرات حمراء، احتمال سحب كرتين حمراء بدون إرجاع هو؟",
        options: ["9/11", "36/55", "81/121", "1/55"],
        correct_answer: "36/55"
    },
    {
        question: "كيس فيه 7 حلوى حمراء و 11 صفراء و 13 خضراء، احتمال سحب خضراء ثم حمراء بدون إرجاع هو؟",
        options: ["91/961", "13/31", "91/930", "7/31"],
        correct_answer: "91/930"
    },
    {
        question: "بلال يمكنه اللعب في 6 رياضات ويأكل في فترة من 3 فترات، احتمال أن يلعب الرياضة الثانية ويأكل في الفترة الأولى هو؟",
        options: ["1/18", "1/9", "1/6", "1/2"],
        correct_answer: "1/18"
    },
    {
        question: "إذا كان A وB حدثان متنافيان فإن P(A و B) يساوي؟",
        options: ["∅", "1", "0", "P(A)"],
        correct_answer: "0"
    },
    {
        question: "كيس فيه 3 كرات حمراء و 4 خضراء و 1 زرقاء، احتمال سحب كرة حمراء أو زرقاء هو؟",
        options: ["1/2", "3/8", "1/8", "1/4"],
        correct_answer: "1/2"
    },
    {
        question: "إذا كان احتمال إصابة هدف 2/7 فإن احتمال عدم إصابته هو؟",
        options: ["2/7", "5/7", "1", "0"],
        correct_answer: "5/7"
    },
    {
        question: "رُمي مكعب مرقم من 1 إلى 6، احتمال ظهور عدد أقل من 3 أو عدد فردي هو؟",
        options: ["1/6", "2/3", "5/6", "1"],
        correct_answer: "2/3"
    },
    {
        question: "احتمال إصابة صياد هدف = 0.5 واحتمال إصابة صياد آخر = 0.6 واحتمال إصابتهم معاً = 0.3، احتمال أن يصيبه الأول أو الثاني هو؟",
        options: ["1.1", "0.8", "0.9", "1"],
        correct_answer: "0.8"
    },
    {
        question: "إذا كان P(A) = 0.3 فإن P(A') تساوي؟",
        options: ["1", "0.3", "0.7", "1.3"],
        correct_answer: "0.7"
    },
    {
        question: "إذا كان P(B) = 2/3 و P(A/B) = 1/2 فإن P(A و B) تساوي؟",
        options: ["1/3", "1/2", "2/3", "5/6"],
        correct_answer: "1/3"
    },
    {
        question: "عند إلقاء قطعة نقد ورمي مكعب مرقم مرة واحدة، احتمال ظهور الشعار والعدد 6 يساوي؟",
        options: ["1", "1/4", "1/2", "1/12"],
        correct_answer: "1/12"
    },
    {
        question: "عدد الأعداد المكونة من 3 أرقام من الأرقام 2,6,1 دون تكرار هو؟",
        options: ["3", "6", "9", "12"],
        correct_answer: "6"
    },
    {
        question: "مسجد له 5 أبواب، عدد طرق دخول وخروج شخص من بابين مختلفين هو؟",
        options: ["25", "20", "10", "5"],
        correct_answer: "20"
    },
    {
        question: "مكعب مرقم أُلقي مرتين، عدد عناصر فضاء العينة هو؟",
        options: ["12", "36", "6", "24"],
        correct_answer: "36"
    },
    {
        question: "احتمال الحصول على عدد فردي من إلقاء مكعب مرقم مرة واحدة هو؟",
        options: ["1/3", "2/3", "1/2", "1/6"],
        correct_answer: "1/2"
    },
    {
        question: "دائرة نصف قطرها 3 داخل مربع طول ضلعه 9، احتمال وقوع نقطة عشوائية داخل الدائرة هو؟",
        options: ["π/9", "9/π", "1/9", "1/3"],
        correct_answer: "π/9"
    }
];

const state = {
  screen: "start",
  secretNumber: null,
  hints: [],
  attempts: 0,
  questionsAnswered: 0,
  currentQuestion: null,
  wrongGuessMessage: "",
  usedQuestionIndexes: []
};

const app = document.getElementById("app");
const attemptsValue = document.getElementById("attempts-value");
const hintsValue = document.getElementById("hints-value");
const hero = document.getElementById("hero");

function updateTopStats() {
  attemptsValue.textContent = state.attempts;
  hintsValue.textContent = state.hints.length;
}

function updateHeroVisibility() {
  if (state.screen === "start") {
    hero.classList.add("hidden");
  } else {
    hero.classList.remove("hidden");
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function chooseQuestion() {
  const availableIndexes = [];

  for (let i = 0; i < questions.length; i++) {
    if (!state.usedQuestionIndexes.includes(i)) {
      availableIndexes.push(i);
    }
  }

  if (availableIndexes.length === 0) {
    return questions[Math.floor(Math.random() * questions.length)];
  }

  const randomIndex =
    availableIndexes[Math.floor(Math.random() * availableIndexes.length)];

  state.usedQuestionIndexes.push(randomIndex);
  return questions[randomIndex];
}

function buildHint(number) {
  const allHints = [];

  if (number % 2 === 0) {
    allHints.push("الرقم زوجي");
  } else {
    allHints.push("الرقم فردي");
  }

  if (number > 50) {
    allHints.push("الرقم أكبر من 50");
  } else {
    allHints.push("الرقم أصغر من أو يساوي 50");
  }

  if (number % 5 === 0) {
    allHints.push("الرقم يقبل القسمة على 5");
  } else {
    allHints.push("الرقم لا يقبل القسمة على 5");
  }

  if (number > 75) {
    allHints.push("الرقم أكبر من 75");
  } else if (number > 50) {
    allHints.push("الرقم بين 51 و 75");
  } else if (number > 25) {
    allHints.push("الرقم بين 26 و 50");
  } else {
    allHints.push("الرقم أصغر من أو يساوي 25");
  }

  const digits = String(number);

  if (digits.length === 2) {
    allHints.push(`خانة العشرات هي ${digits[0]}`);
    allHints.push(`خانة الآحاد هي ${digits[1]}`);
  } else {
    allHints.push("الرقم من خانة واحدة");
  }

  if (number % 3 === 0) {
    allHints.push("الرقم يقبل القسمة على 3");
  } else {
    allHints.push("الرقم لا يقبل القسمة على 3");
  }

  const unusedHints = allHints.filter((hint) => !state.hints.includes(hint));

  if (unusedHints.length === 0) {
    return `الرقم قريب جدًا من ${number + (Math.random() > 0.5 ? 1 : -1)}`;
  }

  return unusedHints[Math.floor(Math.random() * unusedHints.length)];
}

function showNextQuestion() {
  state.currentQuestion = chooseQuestion();
  state.screen = "question";
  render();
}

function startGame() {
  state.secretNumber = getRandomNumber();
  state.hints = [];
  state.attempts = 0;
  state.questionsAnswered = 0;
  state.currentQuestion = null;
  state.wrongGuessMessage = "";
  state.usedQuestionIndexes = [];
  showNextQuestion();
}

function handleAnswer(choice) {
  const isCorrect = choice === state.currentQuestion.correct_answer;
  const buttons = document.querySelectorAll(".answer-button");

  buttons.forEach((button) => {
    button.disabled = true;

    const value = button.dataset.value;
    const status = button.querySelector(".answer-status");

    if (value === state.currentQuestion.correct_answer) {
      button.classList.add("correct");
      status.textContent = "✓";
    } else if (value === choice) {
      button.classList.add("wrong");
      status.textContent = "✕";
    } else {
      button.classList.add("dimmed");
    }
  });

  setTimeout(() => {
    if (isCorrect) {
      state.questionsAnswered += 1;
      state.hints.push(buildHint(state.secretNumber));
      state.screen = "guess";
      render();
    } else {
      state.attempts += 1;
      state.wrongGuessMessage = "إجابة خاطئة! جاوب سؤال ثاني";
      showNextQuestion();
    }
  }, 1200);
}

function handleGuessSubmit(event) {
  event.preventDefault();

  const input = document.getElementById("guess-input");
  const guess = parseInt(input.value, 10);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    return;
  }

  state.attempts += 1;

  if (guess === state.secretNumber) {
    state.screen = "win";
    render();
    return;
  }

  if (guess > state.secretNumber) {
    state.wrongGuessMessage = `${guess} ليس الرقم. الرقم السري أقل من ${guess}`;
  } else {
    state.wrongGuessMessage = `${guess} ليس الرقم. الرقم السري أكبر من ${guess}`;
  }

  showNextQuestion();
}

function renderStart() {
  app.innerHTML = `
    <section class="screen start-screen">
      <div class="start-emoji">🎯</div>
      <h1 class="start-title">لعبة تخمين الرقم</h1>
      <p class="start-description">
        الكمبيوتر اختار رقم سري من 1 إلى 100. جاوب على الأسئلة وخذ تلميحات تساعدك تعرف الرقم.
      </p>

      <div class="howto-list">
        <div class="howto-item">
          <span class="howto-step primary">1</span>
          <p class="howto-text">جاوب السؤال صح</p>
        </div>
        <div class="howto-item">
          <span class="howto-step accent">2</span>
          <p class="howto-text">خذ تلميح عن الرقم</p>
        </div>
        <div class="howto-item">
          <span class="howto-step success">3</span>
          <p class="howto-text">خمّن الرقم</p>
        </div>
      </div>

      <button class="button primary large" id="start-button">!ابدأ اللعب</button>
    </section>
  `;

  document.getElementById("start-button").addEventListener("click", startGame);
}

function renderQuestion() {
  let wrongAlert = "";

  if (state.wrongGuessMessage) {
    wrongAlert = `
      <div class="alert">
        <strong>${state.wrongGuessMessage}</strong>
        <span>جاوب السؤال ثم حاول مرة ثانية</span>
      </div>
    `;
  }

  const answersHtml = state.currentQuestion.options
    .map((option) => {
      return `
        <button class="button answer-button" data-value="${option}">
          <span>${option}</span>
          <span class="answer-status"></span>
        </button>
      `;
    })
    .join("");

  app.innerHTML = `
    <section class="screen">
      ${wrongAlert}
      <article class="panel">
        <div class="panel-bar"></div>
        <div class="panel-body">
          <div class="panel-title">
            <span class="panel-icon primary">س</span>
            <h3 class="panel-heading">سؤال المعرفة</h3>
          </div>

          <p class="question-text">${state.currentQuestion.question}</p>
          <div class="answers">${answersHtml}</div>
        </div>
      </article>
    </section>
  `;

  document.querySelectorAll(".answer-button").forEach((button) => {
    button.addEventListener("click", function () {
      handleAnswer(button.dataset.value);
    });
  });
}

function renderGuess() {
  let hintsHtml = "";

  if (state.hints.length > 0) {
    hintsHtml = `
      <div class="hint-group">
        <p class="hint-label">التلميحات:</p>
        <div class="hint-list">
          ${state.hints
            .map((hint, index) => {
              return `
                <div class="hint-card">
                  <span class="hint-number">${index + 1}</span>
                  <p class="hint-text">${hint}</p>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    `;
  }

  app.innerHTML = `
    <section class="screen">
      <article class="panel">
        <div class="panel-bar accent"></div>
        <div class="panel-body">
          <div class="panel-title">
            <span class="panel-icon accent">#</span>
            <h3 class="panel-heading">خمّن الرقم</h3>
          </div>

          ${hintsHtml}

          <form class="guess-form" id="guess-form">
            <input
              class="guess-input"
              id="guess-input"
              type="number"
              min="1"
              max="100"
              placeholder="أدخل رقم من 1 إلى 100"
              dir="ltr"
              required
            >
            <button class="button primary medium" type="submit">تخمين</button>
          </form>
        </div>
      </article>
    </section>
  `;

  document.getElementById("guess-form").addEventListener("submit", handleGuessSubmit);
}

function renderWin() {
const stars = state.attempts <= 3 ? 3 : state.attempts <= 7 ? 2 : 1;

  app.innerHTML = `
    <section class="screen win-screen">
      <article class="panel">
        <div class="panel-bar gold"></div>
        <div class="panel-body">
          <div class="trophy">🏆</div>
          <h2 class="win-title">مبروووك! 🎉</h2>
          <p class="win-subtitle">عرفت الرقم</p>

          <div class="stars">
            ${[1, 2, 3].map((star) => `<span class="star ${star <= stars ? "filled" : ""}">★</span>`).join("")}
          </div>

          <div class="win-stats">
            <div class="win-stat primary">
              <span class="win-stat-value">${state.secretNumber}</span>
              <span class="win-stat-label">الرقم</span>
            </div>
            <div class="win-stat accent">
              <span class="win-stat-value">${state.attempts}</span>
              <span class="win-stat-label">محاولات</span>
            </div>
            <div class="win-stat success">
              <span class="win-stat-value">${state.questionsAnswered}</span>
              <span class="win-stat-label">أسئلة صحيحة</span>
            </div>
          </div>

          <button class="button primary large" id="restart-button">العب مرة ثانية</button>
        </div>
      </article>
    </section>
  `;

  document.getElementById("restart-button").addEventListener("click", startGame);
}

function render() {
  updateTopStats();
  updateHeroVisibility();

  if (state.screen === "start") {
    renderStart();
  } else if (state.screen === "question") {
    renderQuestion();
  } else if (state.screen === "guess") {
    renderGuess();
  } else if (state.screen === "win") {
    renderWin();
  }
}

render();