function targetTerdekat(arr) {
    // you can only write your code here!
    // you can only write your code here!
    var tesO = []
    var tesX = []
    var tes1 = []
  
    if(arr.indexOf('x')==-1){
      return 0
    }else{
      for(var i=0;i<arr.length;i++){
        if(arr[i]=='o'){
          tesO.push(i)
        }else if(arr[i]=='x'){
          tesX.push(i)
        }
      }
        if(tesX.length>=tesO.length){
          for(j=0;j<tesX.length;j++){
            for(k=0;k<tesO.length;k++){
              tes1.push(Math.abs(tesX[j]-tesO[k]))
            }
          }
          tes1.sort()
          return tes1[0]
        }else{
          for(j=0;j<tesO.length;j++){
            for(k=0;k<tesX.length;k++){
              tes1.push(Math.abs(tesO[j]-tesX[k]))
            }
          }
          tes1.sort()
          return tes1[0]
        }
    }  
    
    return tes1
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['o', ' ', ,'x', ' ', ' ', 'o', 'o', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2