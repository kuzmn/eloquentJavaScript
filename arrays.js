topScope.array = (...values)=> {
  return values;
};

topScope.length = (array)=> {
  return array.length;
};

topScope.element = (array, n)=> {
  return array[n];
};
