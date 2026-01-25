// Bai 1
const BMI = (mass, height) => {
  return mass / height ** 2;
};

const btnCalc = document.getElementById("btn_calc");

const eleMassMark = document.getElementById("weight_mark");

const eleHeightMark = document.getElementById("height_mark");

const eleMassJoin = document.getElementById("weight_join");

const eleHeightJoin = document.getElementById("height_join");

const value = document.getElementById("value");

btnCalc.addEventListener("click", (e) => {
  e.preventDefault();

  let valMassMark = parseFloat(eleMassMark.value);
  let valHeightMark = parseFloat(eleHeightMark.value);
  let valMassJoin = parseFloat(eleMassJoin.value);
  let valHeightJoin = parseFloat(eleHeightJoin.value);

  let markBMI = BMI(valMassMark, valHeightMark);
  let joinBMI = BMI(valMassJoin, valHeightJoin);

  console.log("BMI of Mark: " + markBMI);
  console.log("BMI of Join: " + joinBMI);

  let bool = markBMI > joinBMI;

  value.value = bool
    ? `Mark BMI (${markBMI.toFixed(2)}) is higher than John (${joinBMI.toFixed(
        2
      )})`
    : `John's BMI (${joinBMI.toFixed(
        2
      )}) is higher than Mark's (${markBMI.toFixed(2)})!`;
});
