const anBtn = document.getElementById("anbtn");
const moDa = document.querySelector(".modal");
const clObtn = document.getElementById("clobtn");
const priZe = document.getElementById("prize_form");
const sCo = document.getElementById("sco");

// modal open

anBtn.addEventListener('click',function(){
  moDa.classList.add('on');
});

// modal close

clObtn.addEventListener('click',function(){
  moDa.classList.remove('on');
});

// score count

function totalScore() {
  let score = 0;
  const toTalsco = 20;

  // 정답 목록
  const answers = {
    fruits: "banana",
    animal: "squirrel",
    cook: "vacuumcleaner",
    capital: "seoul",
    flower: "fourleafclover"
  };

  let correctCount = 0;

  for (let question in answers) {
    const selected = document.querySelector(`input[name="${question}"]:checked`);
    if (selected && selected.value === answers[question]) {
      correctCount++;
    }
  }

  score = correctCount * toTalsco;
  
  document.getElementById("sco").innerText =
    `점수: ${score}점 
    (정답 ${correctCount}개 
    / 5문제)`;
}

//

setTimeout(function () {
      priZe.style.display ="block";
      sCo.style.display = "none";
    }, 3000);

function resetModal() {
      sCo.classList.add("active");
      priZe.classList.remove("active");
    }