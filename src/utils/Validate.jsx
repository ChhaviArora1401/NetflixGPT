export const checkValidData = (email, password) => {

  const isEmailVaild = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isPasswordVaild = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailVaild) return "Email Id is not vaild";
  if(!isPasswordVaild) return "Password is not valid";


}