const anBtn = document.getElementById("anbtn");
const moDa = document.querySelector(".modal");
const clObtn = document.getElementById("clobtn");
const priZe = document.getElementById("prize_form");
const sCo = document.getElementById("sco");
let timerId = null;

// modal open

anBtn.addEventListener('click',function(){
  moDa.classList.add('on');
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }

  // 화면 초기화
  sCo.style.display = 'block';
  priZe.style.display = 'none';

  // 모달 보이기
  moDa.style.display = 'block';

  // 일정 시간 후 두 번째 화면으로 전환
  timerId = setTimeout(() => {
    sCo.style.display = 'none';
    priZe.style.display = 'block';
  }, 3000); // 3초
});

// modal close

clObtn.addEventListener('click',function(){
  //moDa.classList.remove('on');
  moDa.style.display = 'none';

  // 타이머 정리
  if (timerId) {
    clearTimeout(timerId);
    timerId = null;
  }

  // 모달 화면 초기화
  sCo.style.display = 'block';
  priZe.style.display = 'none';
});

// score count

function totalScore() {
  let score = 0;
  const toTalsco = 20;

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
    }, 5000);

document.getElementById('prize_form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const tel = document.getElementById('tel').value.trim();
  const error = document.getElementById('error');

  // 초기화
  error.textContent = '';

  // 이름 빈값 확인
  if (name === '') {
    error.textContent ='성과 이름을 함께 입력해주세요';
    return;
  }

  // 이메일 형식 확인
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    error.textContent = '올바른 이메일 형식을 입력해주세요.';
    return;
  }

  const phoneRegex = /^01[016789]-?\d{3,4}-?\d{4}$/;

  if (!phoneRegex.test(tel)) {
    error.textContent = '올바른 전화번호 형식이 아닙니다.';
    return;
  }

  alert('전화번호 유효성 검사 통과!');

  //
  alert('폼이 성공적으로 제출되었습니다!');
});
