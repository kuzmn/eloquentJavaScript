async function locateScalpel(nest){
  for (let name of network(nest)){
    if(name == await anyStorage(nest, name, "scalpel"))
      return name;
  }
  throw new Error("not found");
}

function locateScalpel2(nest) {
  let sources = network(nest);
  function next() {
    if (sources.length == 0) {
      return Promise.reject(new Error("not found"));
    } else {
      let source = sources[Math.floor(Math.random() *
                                    sources.length)];
      sources = sources.filter(n => n != source);
      return anyStorage(nest, source, "scalpel")
        .then(value => value == source ? value : next());
    }
  }
  return next();
}

