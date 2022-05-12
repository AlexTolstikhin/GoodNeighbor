export const formatPhoneNumber = (newValue, stateValue) => {
  if (newValue.length < 15) {
    var cleaned = ('' + newValue).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return newValue;
  }
  return stateValue;
}