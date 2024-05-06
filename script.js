let container = document.getElementById("container");
let formBox = document.getElementById("form_div");
let form = document.getElementById("form");
let username = document.getElementById("username");
let password = document.getElementById("password");
let registration = document.getElementById("form_btn");

const info = [
  {
    username: "mmm",
    password: "123mmm",
  },
];

const handleCheck = () => {
  let usernameValue = username.value;
  let passwordValue = password.value;

  info.forEach((item) => {
    if (usernameValue === item.username && passwordValue === item.password) {
      alert("Tizimga muvavfaqiyatli kirdingiz!");
      form_div.style.display = "none";
    } else if (
      usernameValue === item.username &&
      passwordValue !== item.password
    ) {
      alert("Parolda xatolik bor!");
    } else if (
      usernameValue !== item.username &&
      passwordValue === item.password
    ) {
      alert("Usernameda xatolik bor!");
    } else {
      alert("Username va parol xato!");
    }
  });
};

const createBtnFunc = () => {
  let createBtn = document.createElement("button");
  let h3 = document.createElement("h3");
  h3.innerHTML = "Savol qo'shish uchun ushbu tugmani bosing!";
  createBtn.classList.add("questionBtn");
  createBtn.innerHTML = "Add questions!";
  container.appendChild(h3);
  container.appendChild(createBtn);

  createBtn.addEventListener("click", () => {
    let questionPrompt =
      prompt(`JavaScriptga oid savol yozing a), b), c) variantda javoblarni ham yozing
    `);

    let questions = document.createElement("p");
    questions.innerHTML = "Siz kiritgan savol: " + questionPrompt;
    container.appendChild(questions);
  });
};

form_btn.addEventListener("click", (e) => {
  e.preventDefault();
  handleCheck();
  createBtnFunc();
});