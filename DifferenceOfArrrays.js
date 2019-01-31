function arr_Difference(a1, a2) {
    var result = [];
    for (var i = 0; i < a1.length; i++) {
      if (a2.indexOf(a1[i]) === -1) {
        result.push(a1[i]);
      }
    }
    for (i = 0; i < a2.length; i++) {
      if (a1.indexOf(a2[i]) === -1) {
        result.push(a2[i]);
      }
    }
    return result;
   
  }
  var result = arr_Difference([1, 2, 3], [100, 2, 10]);   
  console.log(result);