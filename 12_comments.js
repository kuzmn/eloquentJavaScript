function skipSpace(string) {
  let first = string.search(/\S/);
  if (first == -1) return "";
  else if (string.charAt(first) == "#") {
    return skipSpace(string.slice(string.search("\n")+1));
  }
  return string.slice(first);
}

//implementation by the hint
function skipSpace(string) {
  return string.slice(/(\s*#[^\n]*\s*)*/.exec(string)[0].length);
}
