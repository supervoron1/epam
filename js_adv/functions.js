export function checkLogin(login) {
  const regexp = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regexp.test(login)
}

export function checkPassword(pass) {
  const regexp = /^([^!@#$%^&*()_])(?=.*?[0-9]).{7,}$/;
  return regexp.test(pass)
}

export function checkCardNumber(num) {
  const regexp = /^\d{12}$/;
  return regexp.test(num)
}

export function checkCardOwner(owner) {
  const regexp = /^[A-Za-z]+\s[A-Za-z]+$/;
  return regexp.test(owner);
}

export function checkCVVCode(cvv) {
  const regexp = /^\d{3}$/;
  return regexp.test(cvv);
}
