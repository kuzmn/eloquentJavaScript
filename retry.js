class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  let result;
  do {
    try{
      result = primitiveMultiply(a,b);
    }catch(e){
      if(e instanceof MultiplicatorUnitFailure){
        console.log(e);
      }else{throw e}
    }
  }while(isNaN(result));
  return result;
}

