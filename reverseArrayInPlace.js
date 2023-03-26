function reverseArrayInPlace(array) {
 for (let j= array.length-1; j> 0; j--) {
  for (let i = 0; i < j; i++) {
   const p = array[i];
   const np = array[i+1];
   array[i]=np;
   array[i+1]=p;
  }
 }
 return array;
}
