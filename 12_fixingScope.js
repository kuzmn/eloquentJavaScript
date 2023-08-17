specialForms.set = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of set");
  }
  let value = evaluate(args[1], scope);
  if(Object.prototype.hasOwnProperty.call(scope, [args[0].name])){
    scope[args[0].name] = value;
  } else if(Object.prototype.hasOwnProperty.call(
  Object.getPrototypeOf(scope), [args[0].name])){
    Object.getPrototypeOf(scope)[args[0].name] = value;
  } else {
    throw new ReferenceError(`Undefined binding: ${args[0].name}`);
  }
  return value;
}

//hint
specialForms.set = (args, scope) => {
  if (args.length != 2 || args[0].type != "word") {
    throw new SyntaxError("Incorrect use of set");
  }
  let value = evaluate(args[1], scope);
  while(scope) {
    if(Object.prototype.hasOwnProperty.call(scope, args[0].name)){
      scope[args[0].name] = value;
      return value;
    }
    scope = Object.getPrototypeOf(scope);
  }
  throw new ReferenceError(`Undefined binding: ${args[0].name}`);
}
