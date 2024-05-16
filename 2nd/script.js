
// 1번 
document.querySelector("#container").addEventListener("click", (e) => {
    if(e.target.id === "container") return;
    e.target.classList.add("clicked");
})

// 2번
function getSquare(number) {
    // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
    return number**2;
}

const result = getSquare(5);
console.log(result);
