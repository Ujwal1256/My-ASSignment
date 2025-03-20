function checkSquareNumber(num){
  
    let ishasSquareFactors = false;
    
    for(let i =1; i<Math.floor(num/2);i++ ){
      if((i**2 + (i+1)**2) == num){
        ishasSquareFactors = true;
        break;
      }
    }
    
    console.log(ishasSquareFactors)
    
  }
  
  checkSquareNumber(25)
  checkSquareNumber(7)
  checkSquareNumber(50)
  
  