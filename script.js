const clickBtn = () => {
    const button = document.querySelector(".btn");
    const title = document.querySelector(".title");
    button.addEventListener("click", (e)=>{
        title.innerText = "제목아니다!!!!!";
    })
}

const sum = (num1, num2) => {
    console.log(num1 + num2);
}

const isEvenOrOdd = (num) => {
    console.log(num % 2 === 0 ? "짝수입니다": "홀수입니다");
}

let name = "지원";
let age = 99;

clickBtn();
sum(3, 5);
sum(6, 8);
isEvenOrOdd(23);
isEvenOrOdd(24);
console.log(`이름: ${name}`);
console.log(`나이: ${age}`);