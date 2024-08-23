let infoBtn = document.querySelector("#infoBtn");
let infoContainer = document.querySelector("#infoContainer");
let backSpaceBtn = document.querySelector("#backSpaceBtn");
let num1 = document.querySelector(".p-num1");
let num2 = document.querySelector(".p-num2");
let num3 = document.querySelector(".p-num3");
let num4 = document.querySelector(".p-num4");

// 설명서 버튼 이벤트
infoBtn.addEventListener("click", () => {
  if (infoContainer.style.display == "none") {
    infoContainer.style.display = "block";
  } else {
    infoContainer.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let currentPosition = 1; // 현재 위치를 저장 (1~4)

  document.addEventListener("keydown", (event) => {
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
      }
    }

    // 백스페이스 키 처리
    if (key === "Backspace") {
      handleBackspace();
    }

    // 엔터 키 처리 (num4 위치에서)
    if (key === "Enter" && currentPosition === 4) {
      handleEnter();
    }
  });

  // Backspace 버튼 클릭 처리
  backSpaceBtn.addEventListener("click", handleBackspace);

  // 백스페이스 동작 함수
  function handleBackspace() {
    if (currentPosition === 1) {
      num1.innerHTML = "";
      currentPosition = 2; 
    } else if (currentPosition === 2) {
      num2.innerHTML = "";
      currentPosition = 3; 
    } else if (currentPosition === 3) {
      num3.innerHTML = "";
      currentPosition = 2; 
    } else if (currentPosition === 4) {
      num4.innerHTML = "";
      currentPosition = 3; 

    }
  }

  // 엔터 키 동작 함수
  function handleEnter() {
    const values = {
      num1: num1.innerHTML,
      num2: num2.innerHTML,
      num3: num3.innerHTML,
      num4: num4.innerHTML,
    };

    // 예시로 콘솔에 값 출력
    console.log("입력된 값들:", values);

    // 입력된 값들을 가지고 다른 동작을 수행할 수 있습니다.
    // 예를 들어, 서버로 값을 보내거나, 화면에 결과를 표시하는 등의 작업을 할 수 있습니다.
  }
});
