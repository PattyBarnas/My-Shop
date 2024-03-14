function passwordValidate(password) {
  const isValid = password.trim().length >= 6 && typeof password === "string";
  return isValid;
}

exports.passwordValidate = passwordValidate;
