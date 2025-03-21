let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
    }
    
    let result = ""
    for(let key in book){
      result += `${key}: ${book[key]} `
    }
    
    console.log(result)