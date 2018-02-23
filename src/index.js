module.exports = function getZerosCount(number, base) {
  function Factorise (base) {
    var j = 1,
    i = 2, // divider
    a = []; //array of simple multiplier
    do {
     if (base % i == 0) { // base
      a[j-1] = i;
      j++;
      base = base / i;
     } else {
      i++;
      };
    }
    while (i < base);
    a[j-1] = i;
    return Math.max(...a); //return max simple multiplier
    };
  var n = [], //geometric progression of the base
  zeros = 0; //number of our zeros
  for (let i = 1; i > 0; i++) { /*fill our array with numbers obtained
                                with geometric progression of the base.
                                this numbers must be less then incoming number*/
    if (n[i-2] > number) {
      n.splice(i-2, 1);
      break;
    };
    n[i-1] = Math.pow(Factorise(base), i);
  };
  for (let i = 0; i < n.length; i++) {
    zeros += Math.floor (number / n[i]); //count our zeros
  };
  return zeros;
};
