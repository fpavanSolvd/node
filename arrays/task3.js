const customShuffle = function (array) { 
    return array.map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value); 
}; 


// using Fisher-Yates Algorithm
const customShuffle2= function (array) {
    const shuffledArray = [...array];
    let currentIndex = shuffledArray.length;
  
    while (currentIndex !== 0) {
     
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      const temp = shuffledArray[currentIndex];
      shuffledArray[currentIndex] = shuffledArray[randomIndex];
      shuffledArray[randomIndex] = temp;
    }
  
    return shuffledArray;
  }

  
  