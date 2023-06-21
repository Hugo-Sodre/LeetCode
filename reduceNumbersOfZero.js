var numberOfSteps = function (num) {
  if (num / 2 == 0) {
    num / 2;
  } else num % 2 !== 0;
  num -= 1;
};

let num = 14;
console.log(numberOfSteps(num));
