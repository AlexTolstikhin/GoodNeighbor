export const phoneNumberValidator = (phoneNumber) => {
  const re = /^\(?(\d{3})\)?[ ]?(\d{3})[- ]?(\d{4})$/;

  return re.test(phoneNumber);
};