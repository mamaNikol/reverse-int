module.exports = function reverse (num) {
  if(num < 0) num *= -1;
  let  n = num.toString();
    return n.split('').reverse().join('');
}
