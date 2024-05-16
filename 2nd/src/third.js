const tag = document.querySelector("#counter")
let cnt = 0;

const interval = setInterval(() => {
    cnt++;
    tag.innerHTML = cnt;

    if(cnt === 5){
        console.log("종료"); 
        clearInterval(interval);
    }
}, 1000)
