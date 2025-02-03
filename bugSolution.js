function foo(x) {
  if (x === null || typeof x !== 'object' || !x.hasOwnProperty('length')) {
    return 0; // Handle null, undefined, or non-objects
  }
  return x.length; 
}
//test cases
console.log(foo(null)); // 0
console.log(foo([1,2,3])); //3
console.log(foo(undefined)); //0
console.log(foo({})); //0
console.log(foo('abc')); //0