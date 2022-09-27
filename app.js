const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");
function compareValues(sum, luckyNumber) {
  if(luckyNumber <= 0 ){
    outputBox.innerText = "Please enter a valid lucky number";
  }
  else {
    if (sum % luckyNumber === 0) {
      outputBox.innerText = "Your birthday is lucky  🥳 🥳";
    }
    else {
      outputBox.innerText = "Your birthday is not lucky 😕";
    }
  }
  

}
function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = caluclateSum(dob);
  if (sum && dob) {

    compareValues(sum, luckyNumber.value);
  }

  else {
    outputBox.innerHTML = "please enter both the fields";
  }

}

function caluclateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumberButton.addEventListener('click', checkBirthDateIsLucky);