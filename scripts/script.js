//Log In

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
if (window.localStorage.getItem("email") !== null) {
  window.location.href = "index.html";
}

//  error
const error = document.querySelector(".error");

// e Form submit
form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // validate form

  if (email.value === "" || password.value === "") {
    error.style.display = "block";
    return;
  }
  // submitting form

  const response = await fetch(
    "http://localhost:3000/users?email=" +
      email.value +
      "&password=" +
      password.value
  );

  const jresponse = await response.json();
  console.log(jresponse);
  if (jresponse.length !== 0) {
    error.style.display = "none";
    window.localStorage.setItem("email", email);
    window.location.href = "home.html";
    return;
  }
});
