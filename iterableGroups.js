class GroupIterator{
  constructor(group){
    this.counter=0;
    this.group=group;
  } 
  next(){
    let keys = Object.keys(this.group);
    if(this.counter==keys.length) return {done:true};
    let value = this.group[keys[this.counter]];
    this.counter++;
    return {value, done:false};
  }
}

class Group {
  constructor(){};
  add(x){
    if(x!==this[x]) this[x]=x;
  }
  delete(x){
    if(x===this[x]) delete this[x];
  }
  has(x){
    return x===this[x]? true:false;
  }
  static from(item){
    let g = new Group;
    for(let x of item){
      g.add(x);
    }
    return g;
  }
  [Symbol.iterator]=function(){
    return new GroupIterator(this);
  };
}

