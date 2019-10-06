function groupAnimals(animals) {
    // you can only write your code here!
    var arr = animals.sort()
    arr.push('')
    var tam = []
    var cetak = []
  
    for(var i=0;i<arr.length-1;i++){
      var tes = []
      if(arr[i][0]===arr[i+1][0]){
        tes.push(arr[i])
        tes.push(arr[i+1])
      }else if(arr[i][0]!==arr[i-1][0]){
        tes.push(arr[i])
      }else{
        tes.push('')
      }
    tam.push(tes)
    }
    // tam.push(arr.pop())
    for(var j=0;j<tam.length;j++){
      // for(var k=0;k<)
      if(tam[j][0] !== ''){
        cetak.push(tam[j])
      }
    }
  
    return cetak
  }
  
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  console.log('\n')
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]