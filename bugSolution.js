function foo(a, b) {
  // Check if either input is null
  if (a === null || b === null) {
    return null; 
  }

  //Convert inputs to numbers and check for NaN
  a = parseFloat(a);
  b = parseFloat(b);
  
  if (isNaN(a) || isNaN(b)){
    return NaN;
  }
  
  return a + b; 
} 