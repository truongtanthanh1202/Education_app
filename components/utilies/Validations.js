//validate email
export const isValidEmail = stringEmail => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail);
};

//validate password
export const isValidPassword = stringPassword => stringPassword.length >= 6;
export const isValidFirstName = stringFistName => stringFistName.length >= 2;
export const isValidLastName = stringLastName => stringLastName.length >= 2;
