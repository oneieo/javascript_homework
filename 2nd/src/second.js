
// 3번
window.addEventListener("scroll", () => {
    console.log(scrollY);
})

// 4번
for(let i = 1 ; i <= 10; i++){
    console.log(i);
}

// 5번 
for(let i = 1; i <=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// 6번
setTimeout(()=>{
    console.log("3초 후에 출력되는 텍스트입니다.");
}, 3000)
