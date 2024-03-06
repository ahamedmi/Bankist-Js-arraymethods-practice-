
/* const j1=[3, 5, 2, 12, 7];
const j2 = [9, 16, 6, 8, 3];
const k1 = [4, 1, 15, 8, 3];
const k2 = [10, 5, 6, 1, 4];

const checkDogs = function(dogsJulia,dogsKate){
    const dogsJuliaCopy = dogsJulia.slice();
    dogsJuliaCopy.splice(-2);
    dogsJuliaCopy.splice(0,1);

    const totalDogs = dogsJuliaCopy.concat(dogsKate);
    
    totalDogs.forEach(function(age,i){
        if(age<3)
        {
          console.log(`Dog number ${i+1} is still a puppy and is ${age} years old`); 
        }
        else
        {
          console.log(`Dog number ${i+1} is adult,and is ${age} years old`);
        }
    })
    
}
checkDogs(j1,k1);
console.log("************")
checkDogs(j2,k2); */

/* const dog_1 = [5, 2, 4, 1, 15, 8, 3];
const dog_2 = [16, 6, 10, 5, 6, 1, 4];

const calAvgHumanAge = function(dogs){
  const result = dogs.map(function(item){
    return item>2 ? 16+item*4 : 2*item;
   }).filter(function(item){
    return item>=18
   }).reduce(function(sum,item,i,arr){

      return sum+item/arr.length;
   },0)

   return result;
}

console.log(calAvgHumanAge(dog_1));
console.log(calAvgHumanAge(dog_2));

console.log("------------------------------");

const calAvgHumanAgeArrow = dogs=>{
  const result = dogs.map(item=>item>2 ? 16+item*4 : 2*item
   ).filter(item=>item>=18
   ).reduce((sum,item,i,arr)=>sum+item/arr.length
   ,0)
   return result;
}

console.log(calAvgHumanAgeArrow(dog_1));
console.log(calAvgHumanAgeArrow(dog_2)); */

console.log("**********************************Final coding challenge***************************");

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
  ];

  dogs.forEach((item)=>{
    item.recFood = item.weight**0.75*28;
  })
  console.log(dogs);

  const {curFood,recFood} = dogs.find(item=>item.owners.includes("Sarah"));

  console.log(`${curFood>recFood ? "Eating too much" : "Eating less"}`);


  const ownersEatTooMuch = dogs.filter(item=>item.curFood>item.recFood).flatMap(item=>item.owners);
  console.log(ownersEatTooMuch);

  const ownersEatTooLittle = dogs.filter(item=>item.curFood<item.recFood).flatMap(item=>item.owners);
  console.log(ownersEatTooLittle);


  /*current > (recommended * 0.90) && current < (recommended *
    1.10)*/
  const recomended = dogs.some(item => item.curFood>item.recFood*0.90 && item.curFood<recFood*1.10 );
  console.log(recomended);

  const OkayArr = dogs.filter(item => item.curFood>item.recFood*0.90 && item.curFood<recFood*1.10);
  console.log(OkayArr);

  const sortedARR = dogs.slice().sort((a,b)=>a.recFood-b.recFood);
  console.log(sortedARR);



  
 
  
  
  




