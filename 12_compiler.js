function convertExpression(program) {
  let match, expr;
  if(match = /^"([^"]*)"|^\d+\b/.exec(program)) expr = match[0];
  else if(match = /^[^\s(),#"]+/.exec(program)) expr = `_${match[0]}`;
  else throw new SyntaxError("Unexpected syntax: " + program);
  return convertApply(expr, program.slice(match[0].length));
}

function convertApply(expr, program) {
  if(program[0] != "(" ) return {expr: expr, rest: program};
  program = program.slice(1);
  let op = expr;
  let args = [];
  while (program[0] != ")") {
    let {expr, rest} = convertExpression(program);
    args.push(expr);
    program = rest;
    if(program[0] == ",") {
      program = program.slice(1);
    }else if(program[0] != ")") {
      throw new SyntaxError("Expected ',' or ')'");
    }
  }
  expr = op.slice(1) in dic ? dic[op.slice(1)](args) : `${op}(${args})`;
  return convertApply(expr, program.slice(1));
}

const dic = Object.create(null);

const params = ["_true=true", "_false=false"];

dic.define = args => {
  if(args.length != 2 || args[0][0] != "_") { 
    throw new SyntaxError("Incorrect use of define");
  } else {
    if(!(params.includes(args[0]) 
          || /^_(true|false)\b/.test(args[0]))) params.push(args[0]);
    return `(()=>{return ${args.join("=")};})()`;
  }
};

dic.do = args =>
`(()=>{${args.slice(0,-1).join(";")};return ${args[args.length-1]};})()`;

dic.if = args => {
  if(args.length != 3) {
    throw new SyntaxError("Wrong number of args to if");
  }
  return `(()=>{return ${args[0]}!==false?${args[1]}:${args[2]};})()`;
};

dic.while = args => {
  if(args.length != 2) {
    throw new SyntaxError("Wrong number of args to while");
  }
  return `(()=>{while(${args[0]}){${args[1]}}return false;})()`;
};

dic.fun = args => `(${args.slice(0,-1)})=>{return ${args[args.length-1]};}`;

//supposed to be in the env
for (let op of ["+", "-", "*", "/", "==", "<", ">"]) {
  dic[op] = ([a, b]) => `(()=>{return ${a} ${op} ${b};})()`;
}

dic.print = value => `(()=>{console.log(${value});return ${value};})()`;

function compile(program) {
  let {expr, rest} = convertExpression(program.replace(/\s/g, ""));
  if (rest.length > 0) { 
    throw new SyntaxError("Unexpected text after program");
  }
  let body = `try {return ${expr};} catch(error) {
    if(error instanceof ReferenceError && error.message[0] == "_") {
      error.message = error.message.slice(1);
      throw error;
    } else {
      throw error;
    }
  }`;
  return Function( ...params, body);
}

function run(program) {
  return compile(program)();
}

