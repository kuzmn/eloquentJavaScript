function countChar(s, b) {
  let i = 0, t = 0;
  function count() {
    let c = s[i];
    if (i > s.length - 1) {
      return t;
    } else if (c == b) {
      t++;
      i++;
    } else {
      i++;
    }
    return count();
  }
  return count();
}
console.log(countChar("io", "i"));