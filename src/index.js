module.exports = function getZerosCount(number, base) {
  function Ferma (n) { //method Ferma
    var s = Math.ceil(Math.sqrt(n)),
    y = 0,
    x = 0;
    for (let i = 1; i > 0; i++) {
      y = Math.pow(s + i, 2) - n;
      if (Math.sqrt(y) % 1 == 0) {
        break;
      };
    };
    x = Math.sqrt (n + y);
    y = Math.sqrt(y);
      return x + y;
    };
    if (base % 2 != 0) { //it work only for odd numbers
      num = Ferma(base);
    } else {
      num = 5;
    }
  var n = [], //geometric progression of the base
  zeros = 0; //number of our zeros
  for (let i = 1; i > 0; i++) { /*fill our array with numbers obtained
                                with geometric progression of the base.
                                this numbers must be less then incoming number*/
    if (n[i-2] > number) {
      n.splice(i-2, 1);
      break;
    };
    n[i-1] = Math.pow(num, i);
  };
  for (let i = 0; i < n.length; i++) {
    zeros += Math.floor (number / n[i]); //count our zeros
  };
  return zeros;
};
