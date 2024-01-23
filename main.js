const btn = document.querySelector(".btn");
const text = document.querySelector(".input-text");

const copyText = (e) => {
  e.preventDefault();

  text.select();
  text.setSelectionRange(0, 999999999);

  document.execCommand("copy");
  btn.textContent = "copied!!";
  setTimeout(() => {
    btn.textContent = "copy";
  }, 5000);
};

btn.addEventListener("click", copyText);
