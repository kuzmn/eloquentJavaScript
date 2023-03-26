class Group {
  constructor(){};
  add(x){
    if(x!==this[x]) this[x]=x;
  }
  delete(x){
    if(x===this[x]) delete this[x];
  }
  has(x){
    return x===this[x]?true:false;
  }
  static from(item){
    let group = new Group;
    for(let i of item){
      group.add(i);
    }
    return group;
  }
}

