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

  if (nameInput.value === "") {
    nameErrMsg.style.removeProperty("display");
    nameInput.style.borderColor = "hsl(0, 100%, 66%)";
    nameBlankErrMsg.style.display = "block";
  } else if (Number.isNaN(+nameInput.value)) {
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

  if (numInput.value === "") {
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
    // if (numArr.length === 19) {
    //   if (
    //     numArr.includes(" ", 3) &&
    //     numArr.includes(" ", 7) &&
    //     numArr.includes(" ", 11)
    //   ) {
    numCard1.innerHTML = numArr.slice(0, 4).join("");
    numCard2.innerHTML = numArr.slice(5, 9).join("");
    numCard3.innerHTML = numArr.slice(10, 14).join("");
    numCard4.innerHTML = numArr.slice(15, 19).join("");
    //   }
    // } else if (numArr.length === 16) {
    //   numCard1.innerHTML = numArr.slice(0, 4).join("");
    //   numCard2.innerHTML = numArr.slice(4, 8).join("");
    //   numCard3.innerHTML = numArr.slice(8, 12).join("");
    //   numCard4.innerHTML = numArr.slice(12, 16).join("");
    ////}///
  } else {
    numBlankErrMsg.style.removeProperty("display");
    numErrMsg.style.removeProperty("display");
    numInput.style.removeProperty("border-color");
    numValid = true;

    ////Put the Card num to the card////
    let numArr = numInput.value.split("");
    // if (numArr.length > 16) {
    //   if (
    //     numArr.includes(" ", 3) &&
    //     numArr.includes(" ", 7) &&
    //     numArr.includes(" ", 11)
    //   ) {
    //     numCard1.innerHTML = numArr.slice(0, 4).join("");
    //     numCard2.innerHTML = numArr.slice(5, 9).join("");
    //     numCard3.innerHTML = numArr.slice(10, 14).join("");
    //     numCard4.innerHTML = numArr.slice(15, 19).join("");
    //   } else {
    //     numBlankErrMsg.style.removeProperty("display");
    //     numErrMsg.style.display = "block";
    //     console.log("last");
    //   }
    // } else if (numArr.length === 16) {
    numCard1.innerHTML = numArr.slice(0, 4).join("");
    numCard2.innerHTML = numArr.slice(4, 8).join("");
    numCard3.innerHTML = numArr.slice(8, 12).join("");
    numCard4.innerHTML = numArr.slice(12, 16).join("");
    ////}////
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
      monthErrMsg.style.removeProperty("display");
      yearErrMsg.style.removeProperty("display");
      dateInputs[1].style.removeProperty("border-color");
      dateBlankErrMsg.style.display = "block"; //
      dateInputs[0].style.borderColor = "hsl(0, 100%, 66%)";

      //put the year of EXP date that entered to the card
      year.innerHTML = dateInputs[1].value;
    } else if (!(dateInputs[0].value === "") && dateInputs[1].value === "") {
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

  if (cvcInput.value === "") {
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
    cvcValid = true;

    //put the cvc that entered to the card
    cvc.innerHTML = cvcInput.value;
  }

  if (!(nameValid && numValid && dateValid && cvcValid)) {
    e.preventDefault();
    // console.log("1: " + nameValid + " 2: " + numValid);
  } else {
    e.preventDefault();
    let content = document.querySelector(".content");
    content.style.width = "0";
    content.style.height = "0";
    content.remove();
    let completeState = document.querySelector(".complete");
    completeState.style.display = "block";
    console.log("hi");
  }
};

let continueBtn = document.querySelector(".cont");
continueBtn.addEventListener("click", function () {
  location.reload();
});
