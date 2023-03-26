function arrayToList(array){
  let sublist = null;
  array.forEach( e =>{
    let list = {};
    list.value=e;
    list.rest=sublist;
    sublist=list;
  })
  return sublist
}

function listToArray(list){
  let array=[];
  for (let i=0; i<=array.length; i++){
    let {value}=list;
    array.push(value);
    let {rest}=list;
    if (rest==null){
      break
    }else{
      list=rest;
    }
  }
  return array
}

function prepend(e,l){
  let newList={};
  newList.value=e;
  newList.rest=l;
  return newList
}

function nth(list, n) {
  let position = 0;

  function check() {
    let {
      value
    } = list;
    let {
      rest
    } = list;
    if (position == n) {
      return value;
    } else if (rest == null) {
      return undefined
    } else {
      position++;
      list = rest;
      return check()
    }
  }
  return check();
}
