const inputNumber = document.getElementById("number");
const converBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertNumber = () => {
  const value = inputNumber.value;
  output.textContent = checkUserInput(value);

  const result = conversion(value).join("");
  console.log(result);
};

const conversion = (num) => {
  const romanArr = [];
  if (num >= 1000) {
    romanArr.push("M");
    num = num - 1000;
    romanArr.push(...conversion(num));
  } else if (num >= 900) {
    romanArr.push("CM");
    num = num - 900;
    romanArr.push(...conversion(num));
  } else if (num >= 500) {
    romanArr.push("D");
    num = num - 500;
    romanArr.push(...conversion(num));
  } else if (num >= 400) {
    romanArr.push("CD");
    num = num - 400;
    romanArr.push(...conversion(num));
  } else if (num >= 100) {
    romanArr.push("C");
    num = num - 100;
    romanArr.push(...conversion(num));
  } else if (num >= 90) {
    romanArr.push("XC");
    num = num - 90;
    romanArr.push(...conversion(num));
  } else if (num >= 50) {
    romanArr.push("L");
    num = num - 50;
    romanArr.push(...conversion(num));
  } else if (num >= 40) {
    romanArr.push("XL");
    num = num - 40;
    romanArr.push(...conversion(num));
  } else if (num >= 10) {
    romanArr.push("X");
    num = num - 10;
    romanArr.push(...conversion(num));
  } else if (num >= 9) {
    romanArr.push("IX");
    num = num - 9;
    romanArr.push(...conversion(num));
  } else if (num >= 5) {
    romanArr.push("V");
    num = num - 5;
    romanArr.push(...conversion(num));
  } else if (num >= 4) {
    romanArr.push("IV");
    num = num - 4;
    romanArr.push(...conversion(num));
  } else if (num >= 1) {
    romanArr.push("I");
    num = num - 1;
    romanArr.push(...conversion(num));
  }
  return romanArr;
};

const checkUserInput = (value) => {
  if (!value) {
    return "Please enter a valid number";
  } else if (value <= 0) {
    return "Please enter a number greater than or equal to 1";
  } else if (value >= 4000) {
    return "Please enter a number less than or equal to 3999";
  }

  return null;
};

converBtn.addEventListener("click", convertNumber);
inputNumber.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    convertNumber();
  }
});
