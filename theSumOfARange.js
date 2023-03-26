function range(b, e, s) {
  let ar = [];
  if (s < 0) {
    for (let i = b; i >= e; i += s) {
      ar.push(i);
    }
  } else if (s > 0) {
    for (let i = b; i <= e; i += s) {
      ar.push(i);
    }
  } else {
    for (let i = b; i <= e; i++) {
      ar.push(i)
    }
  }

  return ar
}

function sum(ar) {
  let s = 0;
  for (let i = 0; i < ar.length; i++) {
    s += ar[i];
  }
  return s
}
console.log(sum(range(1, 10, 2)));
