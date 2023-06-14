function Promise_all(promises) {
  return new Promise((resolve, reject) => {    
    let iterator = function*() {
      for (let promise of promises) {
        yield promise.catch(reject);
      }
    };
    function next(iterator, array) {
      let {value, done} = iterator.next();
      if (done) return resolve(array);
      value.then(v => next(iterator, array.concat(v)));
    }
    next(iterator(), []);
  });
}

