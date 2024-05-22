// 4강 - 문제 8
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
// 8-1
localStorage.setItem("user", JSON.stringify(user));
// 8-2
console.log(user);
// 8-3
const modifiedUser = JSON.parse(localStorage.getItem("user"));
modifiedUser.나이 = 30;
localStorage.setItem("user", JSON.stringify(modifiedUser));
console.log(modifiedUser);
// 8-4
localStorage.removeItem("user");
console.log(JSON.parse(localStorage.getItem("user")));

// 5강 - 문제 1
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data));
