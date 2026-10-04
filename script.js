/* =========================
   NAVIGATION
========================= */

function goToPage(number) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  let target = document.getElementById("page" + number);

  if (target) {
    target.classList.add("active");
    window.scrollTo(0, 0);
  }

}


/* =========================
   PASSWORD
========================= */

function checkPassword(number) {

  let input;
  let correct;
  let error;

  if (number === 1) {

    input = document.getElementById("password1");
    correct = "10112010";
    error = document.getElementById("error1");

  } else {

    input = document.getElementById("password2");
    correct = "030661";
    error = document.getElementById("error2");

  }

  if (input.value.trim() === correct) {

    error.textContent = "Benar! ♡";

    setTimeout(() => {
      goToPage(number + 1);
    }, 500);

  } else {

    error.textContent =
      "Hmm... salah 😭 coba inget-inget lagi.";

  }

}


/* ENTER KEY PASSWORD */

document.addEventListener("keydown", function(event) {

  if (event.key === "Enter") {

    let page1 = document.getElementById("page1");
    let page2 = document.getElementById("page2");

    if (page1.classList.contains("active")) {
      checkPassword(1);
    }

    else if (page2.classList.contains("active")) {
      checkPassword(2);
    }

  }

});


/* =========================
   ENVELOPE
========================= */

function openLetter() {

  document.getElementById("letterContent")
    .classList.add("show");

  document.getElementById("letterHint")
    .style.display = "none";

}


/* =========================
   PUZZLE
========================= */

const puzzle = document.getElementById("puzzle");

let puzzleOrder = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8
];

let selectedPiece = null;


/* Shuffle puzzle */

function shufflePuzzle() {

  do {

    puzzleOrder.sort(() => Math.random() - 0.5);

  } while (
    puzzleOrder.every((value, index) => value === index)
  );

}


/* Create puzzle */

function createPuzzle() {

  puzzle.innerHTML = "";

  puzzleOrder.forEach((piece, position) => {

    let div = document.createElement("div");

    div.className = "puzzle-piece";

    let row = Math.floor(piece / 3);
    let col = piece % 3;

    div.style.backgroundPosition =
      `${col * 50}% ${row * 50}%`;

    div.dataset.position = position;

    div.onclick = () => selectPuzzlePiece(position, div);

    puzzle.appendChild(div);

  });

}


/* Select / swap pieces */

function selectPuzzlePiece(position, element) {

  if (selectedPiece === null) {

    selectedPiece = position;

    element.classList.add("selected");

    return;
  }


  if (selectedPiece === position) {

    element.classList.remove("selected");

    selectedPiece = null;

    return;
  }


  let temp = puzzleOrder[selectedPiece];

  puzzleOrder[selectedPiece] =
    puzzleOrder[position];

  puzzleOrder[position] = temp;

  selectedPiece = null;

  createPuzzle();

  checkPuzzle();

}


/* Check puzzle */

function checkPuzzle() {

  let solved = puzzleOrder.every(
    (value, index) => value === index
  );

  if (solved) {

    document.getElementById("puzzleMessage")
      .textContent =
      "YEAY! Bunganya berhasil disusun! 🌼♡";

    document.getElementById("puzzleNext")
      .disabled = false;

  } else {

    document.getElementById("puzzleMessage")
      .textContent =
      "Belum selesai, susun lagi pelan-pelan ♡";

  }

}


/* Start puzzle */

shufflePuzzle();
createPuzzle();


/* =========================
   QUIZ DATA
========================= */

const questions = [

  {
    q: "Makanan favorite Ami apa?",
    options: [
      "Pie Cherry",
      "Brownie Pink Sweet",
      "Eclaire",
      "Blueberry Cheesecake"
    ],
    ans: "Blueberry Cheesecake"
  },

  {
    q: "Apa minuman favorite Ami?",
    options: [
      "Matcha",
      "Matcha Only",
      "Just Matcha",
      "Always Matcha"
    ],
    ans: "Always Matcha"
  },

  {
    q: "Kalo Ami lagi gabut, Ami suka ngapain?",
    options: [
      "Ngelamun di balkon",
      "Dengerin lagu",
      "Baca Buku",
      "Menghilang dari lane"
    ],
    ans: "Ngelamun di balkon"
  },

  {
    q: "Malem malem menjelang waktu bobo, Ami ngapain sih?",
    options: [
      "Ritual dulu (nangis gajelas)",
      "Ngelamun",
      "Dengerin lagu galau",
      "Semuanya bener banget"
    ],
    ans: "Semuanya bener banget"
  },

  {
    q: "Ami suka puisi, beberapa kata menggunakan bahasa... agar terlihat indah dan memiliki makna.",
    options: [
      "Sansekerta",
      "Baku",
      "Biasa",
      "Berpuitis"
    ],
    ans: "Sansekerta"
  },

  {
    q: "\"Hujan, terasa dingin pada dirgantara\" kata 'Dirgantara' memiliki makna yang berarti..",
    options: [
      "Udara",
      "Langit",
      "Atmosfer",
      "Semua benar"
    ],
    ans: "Semua benar"
  },

  {
    q: "\"Bisikan sang bayu menusuk batin\" kata 'Bayu' memiliki makna yang berarti..",
    options: [
      "Langit",
      "Hujan",
      "Tanah",
      "Angin"
    ],
    ans: "Angin"
  },

  {
    q: "\"Ami tuh suka banget bikin puisi. Saking suka nya, Ami sering bikin kata katanya mengandung Metafora\". Kata 'Metafora' berarti..",
    options: [
      "Bahasa kiasan",
      "Omong kosong",
      "Memiliki makna tersembunyi",
      "Semuanya benar"
    ],
    ans: "Bahasa kiasan"
  },

  {
    q: "Apa yang kaka suka dari Ami?",
    options: [
      "Judes",
      "Senyumnya",
      "Sifatnya",
      "Galak"
    ],
    all: true
  },

  {
    q: "Kalau Ami lagi badmood, Ami biasanya..",
    options: [
      "Diam",
      "Ngambek",
      "Caper",
      "Tergantung keadaan"
    ],
    ans: "Diam"
  },

  {
    q: "Kalo Ami bilang \"terserah\" sebenarnya..",
    options: [
      "Benar benar terserah",
      "Ada sesuatu yang Ami mau",
      "Ami lupa",
      "Ami lagi ngantuk"
    ],
    ans: "Benar benar terserah"
  },

  {
    q: "Menurut kaka, Ami itu..",
    options: [
      "Nyebelin",
      "Lucu",
      "Bikin Nyaman",
      "Bawel"
    ],
    all: true
  },

  {
    q: "Kalo Ami kangen kaka, Ami ngapain?",
    options: [
      "Chat duluan",
      "Caper",
      "Nanyain ke eca",
      "Diam"
    ],
    ans: "Nanyain ke eca"
  },

  {
    q: "Kaka sayang Ami ga?",
    options: [
      "Iya",
      "Sayang",
      "Sayang Banget",
      "SAYANG BANGETT!"
    ],
    all: true
  },

  {
    q: "Kaka suka ncek ya?",
    options: [
      "Iya",
      "Ih tau aja",
      "Suka banget",
      "SUKAA DONGG"
    ],
    all: true
  }

];


/* =========================
   QUIZ PAGES
========================= */

function createQuizPages() {

  questions.forEach((question, index) => {

    let pageNumber = index + 5;

    let section = document.createElement("section");

    section.className = "page";

    section.id = "page" + pageNumber;

    section.innerHTML = `

      <div class="card quiz-card">

        <div class="quiz-number">
          QUESTION ${index + 1} / ${questions.length}
        </div>

        <h1>Random Question 🌷</h1>

        <div class="quiz-question">
          ${question.q}
        </div>

        <div class="options"></div>

        <div class="quiz-message"></div>

        <button
          class="next-button"
          style="display:none"
        >
          Lanjut ♡
        </button>

      </div>

    `;

    document.getElementById("app")
      .insertBefore(
        section,
        document.getElementById("page20")
      );


    let optionsContainer =
      section.querySelector(".options");

    let message =
      section.querySelector(".quiz-message");

    let nextButton =
      section.querySelector(".next-button");


    question.options.forEach(option => {

      let button =
        document.createElement("button");

      button.className = "option";

      button.textContent = option;

      button.onclick = () => {

        if (question.all) {

          button.classList.add("correct");

          message.textContent =
            "Hehehe semuanya boleh, karena Ami ya Ami. ♡";

          optionsContainer
            .querySelectorAll(".option")
            .forEach(btn => {
              btn.disabled = true;
            });

        }

        else if (option === question.ans) {

          button.classList.add("correct");

          message.textContent =
            "BENARRR! Kaka ternyata inget! ♡";

          optionsContainer
            .querySelectorAll(".option")
            .forEach(btn => {
              btn.disabled = true;
            });

        }

        else {

          button.classList.add("wrong");

          message.textContent =
            "Salah 😭 coba pilih yang lain.";

          return;

        }

        nextButton.style.display = "inline-block";

      };

      optionsContainer.appendChild(button);

    });


    nextButton.onclick = () => {

      if (pageNumber < 19) {
        goToPage(pageNumber + 1);
      }

      else {
        goToPage(20);
      }

    };

  });

}


createQuizPages();


/* =========================
   LOCKPAD
========================= */

let enteredCode = "";

const correctCode = "101110";


function pressNumber(number) {

  if (enteredCode.length >= 6) {
    return;
  }

  enteredCode += number;

  updateCodeDisplay();

}


function clearCode() {

  enteredCode =
    enteredCode.slice(0, -1);

  updateCodeDisplay();

}


function updateCodeDisplay() {

  let display = "";

  for (let i = 0; i < 6; i++) {

    if (i < enteredCode.length) {
      display += "● ";
    }

    else {
      display += "○ ";
    }

  }

  document.getElementById("codeDisplay")
    .textContent = display;

}


function checkCode() {

  let message =
    document.getElementById("codeMessage");


  if (enteredCode === correctCode) {

    message.textContent =
      "Kode benar! Puisi Ami terbuka ♡";

    message.style.color = "#78a784";

    setTimeout(() => {
      goToPage(21);
    }, 700);

  }

  else {

    message.textContent =
      "Kode salah 😭 tanya Ami dulu.";

    message.style.color = "#d57f9f";

    enteredCode = "";

    updateCodeDisplay();

  }

}
