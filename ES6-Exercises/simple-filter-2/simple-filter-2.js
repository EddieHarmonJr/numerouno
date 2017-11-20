const filterEvens = (array) => {
    var evens = array.filter((number) => {
      return number % 2 === 0;
    });
    console.log(evens);
  };
  
  
filterEvens([5, 10, 15, 20, 25, 30, 35, 40]);