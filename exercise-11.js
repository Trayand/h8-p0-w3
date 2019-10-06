function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var tes = []
    var tampung = '';
    for(var i=arr.length-1;i>0;i--){
      tes[tes.length] = arr[i]-arr[i-1]
    }
    for(var j=0;j<tes.length-2;j++){
      if(tes[j]===tes[j+1]){
        tampung += 'true'
      } else {
        tampung += 'false'
      }
    }
    return tampung.indexOf('false')==-1
  }
  
  
  
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
  
  console.log(tentukanDeretAritmatika([-1, 1, 2, 5, 7, 9])); // false