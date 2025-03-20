function reverseTheNumber(num){
  
    let reverse = 0;
    //971
    while(num > 0){
      reverse = reverse*10 + num%10;
      num = Math.floor(num/10)
    }
    console.log(reverse)
  }
  reverseTheNumber(971)
  reverseTheNumber(123)
  