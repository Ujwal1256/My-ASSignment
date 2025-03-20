
function isHappy(num){
    // let num = 19
    let isHappyNumber = false;
    while(num >= 10){
      let sum = getSumofDigits(num)
      if(sum == 1){
        isHappyNumber = true;
        break;
      }
      num = sum;
    }
    
    console.log(isHappyNumber)
    
  }
  isHappy(19);
  isHappy(18);
  
  
  function getSumofDigits(number){
    
     let sum = 0;
    
    while(number>0){
      let digit = number%10;
      let square = digit * digit;
      sum += square;
      number = Math.floor(number/10)
    }
    return sum;
  }

//   Algorithm:

// 1. DECLARE and SET isHappyNumber = false .

// 2. DECLARE function getSumOFDIgits(num)  that takes numberas an input and returns the sum of squares of digits.

// 3.WHILE num>=10,  DECLARE and SET SUM = call the function getSumOFDIgits(num) and store the sum is the SUM.

// 4. Check IF SUM == 1, if YES, then SET isHappyNumber  to true and break the loop otherwiase SET num = SUM and repeat STEP 3.

// 5.Print the result if the number is HAPPY number or not.










