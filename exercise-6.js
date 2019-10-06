function angkaPalindrome(num) {
    // you can only write your code here!
    if(num<=8){
      return num + 1;
    } else if(num == 9){
      return 11
    } else {
      while(true){
        var arr = num.toString()
        var text = ''
  
        for(var i=arr.length-1;i>=0;i--){
        text+= arr[i]
        }
        if(text===arr){
          return Number(text)
        }
        num++
      }    
    }
  }
   
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(9)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001