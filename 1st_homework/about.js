const checkButton = document.querySelector('.btn');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelectorAll('.modal-close');
const resultButton = document.querySelector('.modal-check');


checkButton.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});

// console.log(modalClose);

// 이름과 mbti선택후 확인버튼 누르면 entp와 매칭되는 결과값이 나오는 모달창

// 결과 
// best : "INFJ","INTJ" 
// good : "INFP","ENFP","ENFJ","ENTJ","INTP","ENTP"
// notBad : "ISFP", "ESFP", "ISTP", "ESTP"
// nomal : "ISFJ","ESFJ","ISTJ","ESTJ"

// 만드는 법
// 0. 1-4등 까지 각 그룹 만들어두기.
// 1. 4등까지의 결과값 모달창 4개 만들어 놓고 화면에서 숨겨두기
// 2. 확인 버튼 눌렀을때 이름, 유형 선택 값 공백이면 입력하라는 alert띄우기
// 3. 이름과 유형이 입력이 되었을때 entp와 선택된 mbti 유형 비교 후
//    (String Methods 사용)
// 4. 매칭이 되는 그룹의 결과값 모달창 classList 추가하기.
// 5. 결과창이 열리고 x버튼 달아서 끌 수 있게 하기

// 고려사항
// 확인 버튼을 누르면 해당 현재 모달창은 닫힌다.
// 만약 확인버튼을 눌렀는데 alert창이 리턴되는 경우라면 닫히지 않는다.


// grouping
const best = ["INFJ", "INTJ"];
const good = ["INFP", "ENFP", "ENFJ", "ENTJ", "INTP", "ENTP"];
const notBad = ["ISFP", "ESFP", "ISTP", "ESTP"];
const normal = ["ISFJ", "ESFJ", "ISTJ", "ESTJ"];

const resultBest = document.querySelector(".modal-best"); // class를 queryselector로 들고오지 말자 ==> 수많은 클래스 중에 어떤 걸 특정해서 가져올지 모름!!!!!!!!! *반복된 실수*
const resultGood = document.querySelector(".modal-good"); // 대안책 ==> id를 부여해서 id로 가져오던지 혹은 queryselectorAll로 가져와서 인덱스로 특정하자
const resultNotBad = document.querySelector(".modal-notBad");
const resultNormal = document.querySelector(".modal-normal");

const bestContent = document.querySelector(".modal-best-content");
const goodContent = document.querySelector(".modal-good-content");
const notBadContent = document.querySelector(".modal-notBad-content");
const normalContent = document.querySelector(".modal-normal-content");

const userName = document.getElementById("guest")
const mbti = document.getElementById("mbti")

resultButton.addEventListener('click', function (e) {

    if (userName.value.trim() == "") {
        alert("이름을 입력해주세요.");
        return; //  alert을 리턴하는데 이 것의 뜻은 ==> alert함수가 반환하는 값을 리턴하겠다
        //  단순 종료의 의미와는 맞지 않음
    }


    if (mbti.value == "") { // else if를 사용할땐 로직이 적절하게 하위 if까지 오는지 잘 생각하고 쓰자!
        alert("당신의 mbti유형을 선택해주세요.");
        return;
    }
    modalBg.classList.remove('bg-active'); // 반복되는 코드가 있을 때 줄일 수 있는지 잘 생각하자


    // console.log(best.includes(mbti.value));
    // console.log(mbti.value);
    const div = document.createElement("div")
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.border = "none";
    div.style.margin = "10px";
    div.style.textAlign = "center";
    div.style.color = "navy";
    div.style.fontSize = "1.2rem";

    if (best.includes(mbti.value) == true) {
        bestContent.firstElementChild.innerHTML =""
        resultBest.classList.add('best-active');


        div.innerText = `${userName.value}님, 안녕하세요?
        ${mbti.value}유형이신 ${userName.value}님!
        ${userName.value}님 맘이 제 맘!😝💫 You are my Destiny -🎇
        싫어도 어쩔 수 없어요! 곧 만나요🌈 `;


        bestContent.firstElementChild.appendChild(div)
        

    } else if (good.includes(mbti.value) == true) {

        goodContent.firstElementChild.innerHTML =""
        resultGood.classList.add('good-active');

        div.innerText = `${userName.value}님, 안녕하세요?
        ${mbti.value}유형이신 ${userName.value}님!
        ${userName.value}님과 저는 시너지 효과가 가장 강력할 수 있는 관계예요😛!!
        위코드에서 서로 으쌰으쌰하며 같이 열공합시다.😎💻`;

        goodContent.firstElementChild.appendChild(div)

    } else if (notBad.includes(mbti.value) == true) {

        notBadContent.firstElementChild.innerHTML =""
        resultNotBad.classList.add('notBad-active');

        div.innerText = `${userName.value}님, 안녕하세요?
        ${mbti.value}유형이신 ${userName.value}님!
        ${userName.value}님과 저...👏 상반되는 성향이지만 안정적이며,
         함께하신다면 다이나믹해질 수 있을 것 같아 아주 기대되는 관계입니다🤓🥂`;

        notBadContent.firstElementChild.appendChild(div)

    } else if (normal.includes(mbti.value) == true) {

        normalContent.firstElementChild.innerHTML =""
        resultNormal.classList.add('normal-active');

        div.innerText = `${userName.value}님, 안녕하세요?
        ${mbti.value}유형이신 ${userName.value}님!
        ${userName.value}님과 저는 아주 NORMAL합니다..🌳
        그렇다고 서운해하시지 마세요😛! 노멀한 관계만큼 또 좋은게 어디있나요?🤗`;

        normalContent.firstElementChild.appendChild(div)
    }

});



// modalClose[0] 이렇게 사용하면 html을 작성한 본인은 몇번 인덱스가 어떤 역할의 모달인지 알 수 있지만
// 협업시 알 수가 없음 웬만하면 변수를 지정해주자.

const mainModalCloseButton = modalClose[0];
const bestResultModalCloseButton = modalClose[1];
const goodResultModalCloseButton = modalClose[2];
const notBadResultModalCloseButton = modalClose[3];
const normalResultModalCloseButton = modalClose[4];

mainModalCloseButton.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
})
bestResultModalCloseButton.addEventListener('click', function () {
    resultBest.classList.remove('best-active')
})
goodResultModalCloseButton.addEventListener('click', function () {
    resultGood.classList.remove('good-active');
})
notBadResultModalCloseButton.addEventListener('click', function () {
    resultNotBad.classList.remove('notBad-active');
})
normalResultModalCloseButton.addEventListener('click', function () {
    resultNormal.classList.remove('normal-active');

})


