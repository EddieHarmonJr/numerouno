var forEachElem = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }

}
  var logDouble = function(num) {
    console.log(num * 2);
  }
  
var arr = [1, 2, 3];
forEachElem(arr, logDouble);


