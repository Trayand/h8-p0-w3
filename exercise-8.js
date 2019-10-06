function pasanganTerbesar(num) {
    // you can only write your code here!
    var band = num.toString().split('')
    var tes = []
  
    for(var i=0;i<band.length;i++){
      tes[tes.length] = band[i]+band[i+1]
    }
  
    tes.sort(function(value1, value2){return value1>value2})
  
    return tes.pop()
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  console.log(pasanganTerbesar(1232322)); // 32