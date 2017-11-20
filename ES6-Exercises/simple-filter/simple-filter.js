const greaterThan10 = (array) => {
    var bigNumbers = array.filter((number) => {
      return number > 10;
    });
    console.log(bigNumbers)
  };
  
  
  
greaterThan10([10, 3, 5, 88, 6, 94, 123, 832]);