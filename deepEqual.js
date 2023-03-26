function deepEqual(a, b) {
  if (typeof a != typeof b) return false;
  if (typeof a == "object" && a != null && b != null) {
    let ka = Object.keys(a), kb = Object.keys(b);
    if (ka.length != kb.length) return false;
    for (let p of ka) if (!(kb.includes(p) ? deepEqual(a[p], b[p]) : false)) return false;
    return true;
  } else return a === b;
}
