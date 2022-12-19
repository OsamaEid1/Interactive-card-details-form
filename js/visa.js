document.forms[0].onsubmit = function (e) {
 let nameValid = false;
 let numValid = false;
 let dateValid = false;
 let cvcValid = false;

 //Holder Name Field
 let nameInput = document.querySelector("[name = 'name']");

 let nameErrMsg = document.querySelector(".nameErrMsg");
 let nameBlankErrMsg = document.querySelector(".nameBlankErrMsg");

 let holderName = document.querySelector(".holder-name");

 function isOnlyCharacters() {
  let validation = true;
  for (let i = 0; i < nameInput.value.length; i++) {
   if (nameInput.value[i] != " ") {
    if (nameInput.value[i].toLowerCase() === nameInput.value[i].toUpperCase()) {
     validation = false;
     break;
    }
   }
  }
  return validation;
 }

 if (nameInput.value === "" || nameInput.value === " ") {
  //Check is Empty
  nameErrMsg.style.removeProperty("display");
  nameInput.style.borderColor = "hsl(0, 100%, 66%)";
  nameBlankErrMsg.style.display = "block";
 } else if (isOnlyCharacters()) {
  //Check is only characters(names)
  nameBlankErrMsg.style.removeProperty("display");
  nameErrMsg.style.removeProperty("display");
  nameInput.style.removeProperty("border-color");
  nameValid = true;

  //put the holder name that entered to the card
  holderName.innerHTML = nameInput.value;
 } else {
  nameBlankErrMsg.style.removeProperty("display");
  nameInput.style.borderColor = "hsl(0, 100%, 66%)";
  nameErrMsg.style.display = "block";

  //put the holder name that entered to the card
  holderName.innerHTML = nameInput.value;
 }

 //Number Card Field
 let numInput = document.querySelector("[name = 'num']");

 let numErrMsg = document.querySelector(".numErrMsg");
 let numBlankErrMsg = document.querySelector(".numBlankErrMsg");

 let numCard1 = document.querySelector(".num-card-1");
 let numCard2 = document.querySelector(".num-card-2");
 let numCard3 = document.querySelector(".num-card-3");
 let numCard4 = document.querySelector(".num-card-4");

 if (numInput.value === "" || numInput.value === " ") {
  //Check is Empty
  numErrMsg.style.removeProperty("display");
  numInput.style.borderColor = "hsl(0, 100%, 66%)";
  numBlankErrMsg.style.display = "block";
 } else if (Number.isNaN(+numInput.value)) {
  //Check if is not number
  numBlankErrMsg.style.removeProperty("display");
  numInput.style.borderColor = "hsl(0, 100%, 66%)";
  numErrMsg.style.display = "block";

  ////Put the Card num to the card////
  let numArr = numInput.value.split("");

  numCard1.innerHTML = numArr.slice(0, 4).join("");
  numCard2.innerHTML = numArr.slice(5, 9).join("");
  numCard3.innerHTML = numArr.slice(10, 14).join("");
  numCard4.innerHTML = numArr.slice(15, 19).join("");
 } else {
  numBlankErrMsg.style.removeProperty("display");
  numErrMsg.style.removeProperty("display");
  numInput.style.removeProperty("border-color");
  numValid = true;

  ////Put the Card num to the card////
  let numArr = numInput.value.split("");
  numCard1.innerHTML = numArr.slice(0, 4).join("");
  numCard2.innerHTML = numArr.slice(4, 8).join("");
  numCard3.innerHTML = numArr.slice(8, 12).join("");
  numCard4.innerHTML = numArr.slice(12, 16).join("");
 }

 //Date Field
 let dateInputs = document.querySelectorAll(".date input");

 let dateBlankErrMsg = document.querySelector(".dateBlankErrMsg");
 let monthErrMsg = document.querySelector(".monthErrMsg");
 let yearErrMsg = document.querySelector(".yearErrMsg");
 let monthAndYearErrMsg = document.querySelector(".monthAndYearErrMsg");

 let month = document.querySelector(".month");
 let year = document.querySelector(".year");

 if (dateInputs[0].value === "" || dateInputs[1].value === "") {
  //Check Empty
  if (dateInputs[0].value === "" && !(dateInputs[1].value === "")) {
   //For month
   monthErrMsg.style.removeProperty("display");
   yearErrMsg.style.removeProperty("display");
   dateInputs[1].style.removeProperty("border-color");
   dateBlankErrMsg.style.display = "block"; //
   dateInputs[0].style.borderColor = "hsl(0, 100%, 66%)";

   //put the year of EXP date that entered to the card
   year.innerHTML = dateInputs[1].value;
  } else if (!(dateInputs[0].value === "") && dateInputs[1].value === "") {
   //For year
   monthErrMsg.style.removeProperty("display");
   yearErrMsg.style.removeProperty("display");
   dateInputs[0].style.removeProperty("border-color");
   dateBlankErrMsg.style.display = "block"; //
   dateInputs[1].style.borderColor = "hsl(0, 100%, 66%)";

   //put the month of the EXP that entered to the card
   if (dateInputs[0].value.length === 1)
    month.innerHTML = "0" + dateInputs[0].value;
   else month.innerHTML = dateInputs[0].value;
  } else {
   //If month and year are empty
   monthErrMsg.style.removeProperty("display");
   yearErrMsg.style.removeProperty("display");
   monthAndYearErrMsg.style.removeProperty("display");
   dateBlankErrMsg.style.display = "block"; //
   dateInputs[0].style.borderColor = "hsl(0, 100%, 66%)";
   dateInputs[1].style.borderColor = "hsl(0, 100%, 66%)";
  }
 } else if (
  //Check Month
  !(dateInputs[0].value <= 12 && dateInputs[0].value != 0) &&
  dateInputs[1].value >= 22 &&
  dateInputs[1].value <= 32
 ) {
  dateBlankErrMsg.style.removeProperty("display");
  yearErrMsg.style.removeProperty("display");
  monthAndYearErrMsg.style.removeProperty("display");
  monthErrMsg.style.display = "block"; //
  dateInputs[1].style.removeProperty("border-color");
  dateInputs[0].style.borderColor = "hsl(0, 100%, 66%)";

  //put the month of the EXP that entered to the card
  if (dateInputs[0].value.length === 1)
   month.innerHTML = "0" + dateInputs[0].value;
  else month.innerHTML = dateInputs[0].value;
 } else if (
  //Check Year
  !(dateInputs[1].value >= 22 && dateInputs[1].value <= 32) &&
  dateInputs[0].value <= 12
 ) {
  dateBlankErrMsg.style.removeProperty("display");
  monthErrMsg.style.removeProperty("display");
  monthAndYearErrMsg.style.removeProperty("display");
  yearErrMsg.style.display = "block"; //
  dateInputs[0].style.removeProperty("border-color");
  dateInputs[1].style.borderColor = "hsl(0, 100%, 66%)";

  //put the year of EXP date that entered to the card
  year.innerHTML = dateInputs[1].value;
  //put the month of the EXP that entered to the card
  if (dateInputs[0].value.length === 1)
   month.innerHTML = "0" + dateInputs[0].value;
  else month.innerHTML = dateInputs[0].value;
 } else if (
  //Check Month and Year
  !(
   dateInputs[0].value <= 12 &&
   // dateInputs[0].value === 0 &&
   dateInputs[1].value >= 22 &&
   dateInputs[1].value <= 32
  )
 ) {
  dateBlankErrMsg.style.removeProperty("display");
  monthErrMsg.style.removeProperty("display");
  yearErrMsg.style.removeProperty("display");
  monthAndYearErrMsg.style.display = "block"; //
  dateInputs[0].style.borderColor = "hsl(0, 100%, 66%)";
  dateInputs[1].style.borderColor = "hsl(0, 100%, 66%)";

  //put the EXP date that entered to the card
  month.innerHTML = dateInputs[0].value;
  year.innerHTML = dateInputs[1].value;
 } else {
  // If all is correct
  dateBlankErrMsg.style.removeProperty("display");
  monthErrMsg.style.removeProperty("display");
  yearErrMsg.style.removeProperty("display");
  monthAndYearErrMsg.style.removeProperty("display");
  dateInputs[0].style.removeProperty("border-color");
  dateInputs[1].style.removeProperty("border-color");
  dateValid = true;

  //put the EXP date that entered to the card
  if (dateInputs[0].value.length === 1)
   month.innerHTML = "0" + dateInputs[0].value;
  else month.innerHTML = dateInputs[0].value;
  year.innerHTML = dateInputs[1].value;
 }

 //CVC Card Field
 let cvcInput = document.querySelector("[name = 'cvc']");

 let cvcErrMsg = document.querySelector(".cvcErrMsg");
 let cvcBlankErrMsg = document.querySelector(".cvcBlankErrMsg");

 let cvc = document.querySelector(".cvc");

 if (cvcInput.value === "" || cvcInput.value === " ") {
  //Check is Empty
  cvcErrMsg.style.removeProperty("display");
  cvcBlankErrMsg.style.display = "block";
  cvcInput.style.borderColor = "hsl(0, 100%, 66%)";
 } else if (Number.isNaN(+cvcInput.value)) {
  cvcBlankErrMsg.style.removeProperty("display");
  cvcErrMsg.style.display = "block";
  cvcInput.style.borderColor = "hsl(0, 100%, 66%)";

  //put the cvc that entered to the card
  cvc.innerHTML = cvcInput.value;
 } else {
  cvcBlankErrMsg.style.removeProperty("display");
  cvcErrMsg.style.removeProperty("display");
  cvcInput.style.removeProperty("border-color");
  cvcValid = true;

  //put the cvc that entered to the card
  cvc.innerHTML = cvcInput.value;
 }

 if (!(nameValid && numValid && dateValid && cvcValid)) {
  //Confirm the updates
  e.preventDefault();
 } else {
  //Confirm the updates before completion
  e.preventDefault();
  setTimeout(() => {
   //Create Completion state and replace it with from
   let form = document.querySelector("form");

   let div = document.createElement("div");
   let img = document.createElement("img");
   let h3 = document.createElement("h3");
   let h3Text = document.createTextNode("Thank you!");
   let p = document.createElement("p");
   let pText = document.createTextNode("We've added your card details");
   let btn = document.createElement("button");
   let btnText = document.createTextNode("Continue");

   div.className = "complete";
   img.src = "images/icon-complete.svg";
   btn.className = "cont";
   btn.type = "submit";

   h3.appendChild(h3Text);
   p.appendChild(pText);
   btn.appendChild(btnText);

   div.appendChild(img);
   div.appendChild(h3);
   div.appendChild(p);
   div.appendChild(btn);

   form.parentElement.appendChild(div);
   form.remove();

   //When Clicking on Continue btn Go Back to the form state
   let continueBtn = document.querySelector(".cont");
   continueBtn.onclick = () => {
    location.reload();
   };
  }, 500);
 }
};
