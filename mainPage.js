let infoBtn = document.querySelector("#infoBtn");
let retryBtn = document.querySelector("#retryBtn");
let infoContainer = document.querySelector("#infoContainer");
let backSpaceBtn = document.querySelector("#backSpaceBtn");
let num1 = document.querySelector(".p-num1");
let num2 = document.querySelector(".p-num2");
let num3 = document.querySelector(".p-num3");
let num4 = document.querySelector(".p-num4");
let outputContainer = document.querySelector(".outputContainer");

let index = 1;
// 초기화된 o_num1 ~ o_num4
let o_num1 = document.querySelector(".o-iptNum1");
let o_num2 = document.querySelector(".o-iptNum2");
let o_num3 = document.querySelector(".o-iptNum3");
let o_num4 = document.querySelector(".o-iptNum4");

let currentPosition = 1; // 현재 위치를 저장 (1~4)
let outputIndex = 1; // 현재 표시된 outputBox 인덱스

document.addEventListener("keydown", function handleInput(event) {
  const key = event.key;

  // 숫자 키인지 확인 (0-9)
  if (key >= "0" && key <= "9") {
    // 현재 위치에 숫자를 입력
    if (currentPosition === 1) {
      num1.innerHTML = key;
      currentPosition = 2;
    } else if (currentPosition === 2) {
      num2.innerHTML = key;
      currentPosition = 3;
    } else if (currentPosition === 3) {
      num3.innerHTML = key;
      currentPosition = 4;
    } else if (currentPosition === 4) {
      num4.innerHTML = key;
      currentPosition = 5;
    }
  }

  // 백스페이스 키 처리
  if (key === "Backspace") {
    handleBackspace();
  }

  // 엔터 키 처리 
  if (key === "Enter" && currentPosition === 5) {
    handleEnter();
  }
});

// Backspace 버튼 클릭 처리
backSpaceBtn.addEventListener("click", handleBackspace);

// 백스페이스 동작 함수
function handleBackspace() {
  if (currentPosition === 1) {
    num1.innerHTML = ""; // 첫 번째 자리일 때 아무것도 지우지 않음
  } else if (currentPosition === 2) {
    num1.innerHTML = "";
    currentPosition = 1;
  } else if (currentPosition === 3) {
    num2.innerHTML = "";
    currentPosition = 2;
  } else if (currentPosition === 4) {
    num3.innerHTML = "";
    currentPosition = 3;
  } else if (currentPosition === 5) {
    num4.innerHTML = "";
    currentPosition = 4;
  }
}

// 엔터 키 동작 함수
function handleEnter() {
  outputContainer.style.display = "block";
  const values = {
    num1: num1.innerHTML,
    num2: num2.innerHTML,
    num3: num3.innerHTML,
    num4: num4.innerHTML,
  };

  const outputBox = document.createElement("div");
  outputBox.setAttribute("class","outputBox");
  outputBox.innerHTML = `
  <span class="index">${index}</span>
        <div class="boxContainer">
          <div class="iptNumBox">
            <span class="o-iptNum1 output-iptNum">${values.num1}</span>
            <span class="o-iptNum2 output-iptNum">${values.num2}</span>
            <span class="o-iptNum3 output-iptNum">${values.num3}</span>
            <span class="o-iptNum4 output-iptNum">${values.num4}</span>
          </div>
          <div class="resultBox">
            <span class="resultCircle strike">S</span>
            <span class="resultCircle ball">B</span>
            <span class="resultCircle out">O</span>
            <span class="resultCircle out">O</span>
          </div>
        </div>
  `;

  outputContainer.appendChild(outputBox);

  // 입력값 초기화
  resetInputs();

  // 포커스를 첫 번째 입력으로 이동
  currentPosition = 1;
  //인덱스 증가
  index +=1;
}

// 입력값 초기화 함수
function resetInputs() {
  num1.innerHTML = "";
  num2.innerHTML = "";
  num3.innerHTML = "";
  num4.innerHTML = "";
}

retryBtn.addEventListener('click', ()=> {
  let answer = confirm("게임을 다시 시작하시겠습니까?");
  if(answer){
    location.href = "/mainPage.html";
  }
})
// 설명서 버튼 이벤트
infoBtn.addEventListener("click", () => {
  if (infoContainer.style.display === "none") {
    infoContainer.style.display = "block";
  } else {
    infoContainer.style.display = "none";
  }
});
