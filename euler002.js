(function euler002(){

  var fib = [1, 2];
  var lastValue = fib[fib.length-1];
  var result = 0;

  function createFibo(arr){
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }

  while (lastValue < 4e+6){
    createFibo(fib);
    lastValue = fib[fib.length-1];
  }

  fib.forEach(function(n){
    if(n % 2 == 0){
      result += n
     }
    console.log(result);
  })
}());

