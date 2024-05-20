// 문제 1
const users = [
  {
    이름: "철수",
    나이: 19,
    성별: "남",
  },
  {
    이름: "짱구",
    나이: 20,
    성별: "남",
  },
  {
    이름: "유리",
    나이: 21,
    성별: "여",
  },
];
console.log(users);

// 문제 2
const userSection = document.querySelector(".user-data");
users.forEach((user) => {
  userSection.insertAdjacentHTML(
    "beforeend",
    `<div>
    <h2>이름: ${user.이름}</h2>
    <p>나이: ${user.나이}</p>
    <p>성별: ${user.성별}</p>
    </div>`
  );
});

// 문제 3
const answer3 = users.find((user) => {
  return user.성별 === "여";
});
console.log(answer3);

// 문제 4
const answer4 = users.filter((user) => {
  return user.성별 === "남";
});
console.log(answer4);

// 문제 5
const answer5 = users.map((user) => {
  return { ...user, 나이: user.나이 + 10 };
});
console.log(users, answer5);

// 문제 6
const answer6 = [...users];
answer6.sort((a, b) => b.나이 - a.나이);
console.log(users, answer6);

// 문제 7
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user;
console.log(이름, 나이, 주소);
