const refs = {
  form: document.querySelector(".login-form"),
};

const handleSubmit = (event) => {
  event.preventDefault();

  const { email, password } = event.target.elements;
  const emailValue = email.value;
  const passwordValue = password.value;

  // // // Змінні emailValue та passwordValue можна замінити деструктуризацією
  //  const {
  //    email: { value: emailValue },
  //    password: { value: passwordValue },
  //  } = event.target.elements;
  // // ========================

  if (emailValue === "" || passwordValue === "") {
    return alert("Please fill in all the fields!");
  }

  console.log({ emailValue, passwordValue });
  event.currentTarget.reset();
};

// ----- event LIsteners -----
refs.form.addEventListener("submit", handleSubmit);
