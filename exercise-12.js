function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var tes = []
    var tampung = '';
    for(var i=arr.length-1;i>0;i--){
      tes[tes.length] = arr[i]/arr[i-1]
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
  
  
  
  
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false