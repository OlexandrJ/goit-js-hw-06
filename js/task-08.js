const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const formData = new FormData(this);
  const userData = {};

  formData.forEach((value, key) => {
    userData[key] = value;
  });

  if (!userData.email || !userData.password) {
    alert('All fields must be filled in.');
    return;
  }

  console.log(userData);
  this.reset();
});