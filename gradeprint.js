let studentScores = {
    John: 85,
    Emma: 92,
    Sam: 67,
    Bob: 45
  };
  
  for(let key in studentScores){
    let grade = getGrade(studentScores[key]);
    console.log(`${key} - ${grade}`)
  }
  
  
  
  function getGrade(score){
    if(score >= 90){
      return "A"
    }
    else if(score >=80 && score <90){
      return "B"
    }
    else if(score >=70 && score <80){
      return "C"
    }
     else if(score >=60 && score <70){
      return "D"
    }
    else{
      return "F"
    }
    
    
  }