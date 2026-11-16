const maskEmail = email =>{
  const atTheRatePosition = email.indexOf("@");
  const maskedEmail = `${email[0]+"*".repeat(atTheRatePosition-2)+email.slice(atTheRatePosition-1)}`
  return maskedEmail;
}
const email ="freecodecamp@example.com"
console.log(maskEmail(email))
