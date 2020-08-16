// задание 1

const string = "Привет! Как дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и"];

const getVowels = stringToFilter => {
   let extractedVowels = "";

   for(let i = 0; i < stringToFilter.length; i++) {
       const currentLetter = stringToFilter[i].toLowerCase();
       
       if (vowels.includes(currentLetter)) {
           extractedVowels += currentLetter;
       }
    }
     return extractedVowels
}
alert(getVowels(string));
console.log(getVowels(string)) 

// эадание 2
const workers = [
   {  name: 'Спанчбоб', salary: 1700 },
   {  name: 'Винни Пух',salary: 700 },
   {  name: 'Смурфик', salary: 1200 },
  ];

  const getWorthyWorkers = (workersArr) => {
       const worthyWorkers = [];

       workersArr.forEach(currentWorker => {
           if(currentWorker.salary > 1000) {
               worthyWorkers.push(currentWorker.name)
           }
           
       })
            return worthyWorkers; 
       };
       alert(getWorthyWorkers(workers));
                console.log(getWorthyWorkers(workers));

/* 
        for (i = 0; i <workersArr.length; i++) {
           const currentWorker = workersArr[i]; 
          
           if (currentWorker.salary > 1000) {
               worthyWorkers.push(currentWorker.name);
           }

       }

       return worthyWorkers;
  }

 console.log(getWorthyWorkers(workers));*/



// задание 3

const path = "/users/download/index.html"

const isHtml = path => {
   const requiredExt = ".html";
   const pathExt = path.slice(-5);

   return  pathExt == requiredExt 
  
}

alert(isHtml(path));

console.log(isHtml(path));

// задание 4

 const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = num => {
   return num % 2 == 0;
}

const filterArray = (arrayToFilter, filterFn) => {

   const filteredArray = [];

   arrayToFilter.forEach(num => {
       if (filterFn(num)) {
           filteredArray.push(num)
       }
   })

   return filteredArray; 
}

alert(filterArray(mixedArray, isEven));

console.log(filterArray(mixedArray, isEven)); 
