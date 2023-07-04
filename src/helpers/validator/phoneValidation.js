export default function phoneValidator(phone) {
  // format 08##########
  const re = /^[0-9]{10,12}$/;
  const phoneNum = Number(phone);
  if (!phoneNum) return "Phone can't be empty.";
  if (!re.test(phoneNum))
    return "Ooops! We need a valid phone number. must 08##########";
  return "";
}
