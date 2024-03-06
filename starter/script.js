'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};



// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES




/////////////////////////////////////////////////

/* let arr = ["a","b","c","d","e"]; */
//slice method --- not mutate the original array 
/* console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(1,-1));
console.log(arr.slice()) */ // used to make shallow copy of array just like spead operator but used only for when chaining needed

//splice method --- mutate original array which means original array would be extra part after slice method extract some of original array 
//splice() second parameter says how many element should be deleted from begining parameter(index)

//used to remove last elements mostly 
/* arr.splice(-1);
console.log(arr);

console.log(arr.splice(1,2));//2 elements from 1 is removed
console.log(arr);//remaining element 
 */
/* console.log(arr.splice(2)) //c,d,e
console.log(arr)//a,b

//reverse method --- it mutate array and reverse the array item order 
arr = ["a","b","c","d","e"];
let arr2=["j","i","h","g","f"];

console.log(arr2.reverse());// -- give same mutated results
console.log(arr2) // mutated 

//concat -- add two arrays no mutation to involved original array 

console.log(arr.concat(arr2))

//join method to join all array item into string with a special character 

let letter = arr.concat(arr2).join("--");
console.log(letter); */

//new at method -- to retrieve a item using index 

/* let arr3 = [10,40,64];
console.log(arr3[0]);
console.log(arr3.at(0));
console.log(arr3[arr3.length-1]);
console.log(arr3.slice(-1)[0]);
//console.log(arr3.splice(-1)[0]) 
console.log(arr3.at(-1));//-minus index accaptable in at() it would be used for method chaininng

//this at() would use for sring as well
console.log("jonas".at(0));
console.log("jonas".at(-1)); */

//for of--------------------------------


/* 
for(const movement of movements){
  if(movement>0){
    console.log(`${movement}-deposit`)
  }else{
    console.log(`${Math.abs(movement)}-withdraw`);
  }
}

console.log("=======foreach======================")
//callback function inside foreach always will be called in each iteration and in each iteration a element would be passed into callback function.

movements.forEach(function(movement){
  if(movement>0){
    console.log(`${movement}-deposit`)
  }
  else{
    console.log(`${Math.abs(movement)}-withdraw`)
  }
})

//argument in the callback function respectively array item, array order and entire array 
console.log("========foreach arguments============")
movements.forEach(function(movement,i,arr){
  if(movement>0){
    console.log(`${i+1}. ${movement}-deposit`)
  }
  else{
    console.log(`${i+1}. ${Math.abs(movement)}-withdraw`)
  }
  console.log(`here is the list ${arr}`)
})

const arr = [1,2,3];
console.log(arr);
console.log(`${arr}`);
 */

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//for each operate exactly same in map and sets 
/* console.log(currencies.keys())
const currrencyUnique = new Set(currencies.keys());
console.log(currrencyUnique);

currencies.forEach(function(value,key,map){
    console.log(`${key}:${value}`);
    console.log(map);
})

currrencyUnique.forEach(function(value,_,set){
  console.log(`${value}:${value}`)
  console.log(set);
})
//no key values for set since sets do not have key or indexes */


const displayMovements = function(movements,sort=false){

    containerMovements.innerHTML="";
     const movs = sort ? movements.slice().sort((a,b)=>a-b) : movements;
     movs.forEach(function(movement,i){
      const type = movement>0 ? "deposit":"withdrawal";
      const html = 
      `<div class="movements__row">
      <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
      <div class="movements__value">${movement}€</div>
      </div>`;

      containerMovements.insertAdjacentHTML("afterbegin",html);

     })
}
displayMovements(account1.movements);
//insertAdjacent element - add new child element inside an element(afterbegin-being first element,beforeend-being last element,afterend-being next element,beforebegin-being previous element)
//innerHTML -- just like textContent but it would give html elements as well 




/* 
const eurTousd = 1.1

const arrInUsd =  movements.map(function(currentValue){
  return currentValue*eurTousd;
})

console.log(arrInUsd);

console.log("--------------------------")

const arrUSD = [];

for (const movement of movements){
   arrUSD.push(movement*eurTousd)
}
console.log(arrUSD);

console.log("--------------------------")

const arrMap = movements.map(function(mov,i,arr){

  if(mov>0)
  {
    return `${mov} - deposite`;
  }
  else
  {
    return `${Math.abs(mov)} - withdrawal`;
  }

})
console.log(arrMap);

console.log("*******************");

const arrMapTern = movements.map(function(mov,i,arr){
   return `${i+1}-${Math.abs(mov)}:${mov>0 ? "deposited" : "withdrawal"}`
})

console.log(arrMapTern); */

const accounts = [account1, account2, account3, account4];

const createUserName = function(accs){

 accs.forEach(function(acc){

 acc.username = acc.owner.toLowerCase().split(" ").map(function(name){
    return name[0]
  }).join("")

 })
}
createUserName(accounts)
console.log(accounts)

/*const un ="jonas scheme".toLowerCase().split(" ").map(function(name){
    return name[0]
}).join("");
console.log(un);*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* const deposit = movements.filter(function(movement,i,arr){
  return movement>0;
});
console.log(deposit);
console.log("****************");
const depositForof =[];
for(const movement of movements){
   if(movement>0){
    depositForof.push(movement);
   }
}
console.log(depositForof);
console.log("****************");
const withdraw = movements.filter(mov=>mov<0)
console.log(withdraw); */



//here acc track current sum 
  const displayBalance = function(accs){
  accs.balance = accs.movements.reduce(function(acc,mov,i,arr){
    return acc+mov;
},0)

  labelBalance.textContent = `${accs.balance}Eur`
   
}
/* displayBalance(account1) */


const createSummaryDisplay = function(acc){
     const totalDeposit = acc.movements.filter(mov=>mov>0).reduce((acc,current)=>acc+current);

     labelSumIn.textContent =`${totalDeposit}Eur`;

     const totalWithdraw =  acc.movements.filter(mov=>mov<0).reduce((acc,current)=>acc+current);

     labelSumOut.textContent= `${Math.abs(totalWithdraw)}Eur`

     const totalInterest =  acc.movements.filter(mov=>mov>0).map(mov=>mov*acc.interestRate).filter(mov=>mov>=1.0).reduce((acc,mov)=>acc+mov);

     labelSumInterest.textContent = `${totalInterest}Eur`

}

createSummaryDisplay(account1);


//find maximum using reduce here acc track curent maximum value 

/* const maximum = movements.reduce(function(acc,current){
  return current>acc ? current : acc;
},movements[0]);
console.log(maximum); */

const eurTousd = 1.1

const createSummary = function(transactions){


}

const deposit = movements.filter(mov=>mov>0).map(item=>item*eurTousd).reduce((acc,current)=>acc+current)

const withdraw = movements.filter(mov=>mov<0).map(item=>item*eurTousd).reduce((acc,current)=>acc+current)

console.log(deposit);
console.log(Math.abs(withdraw));

//find() method 
//find method would work just like filter 
//but find method would return value not array 
//find method would return the first value that satisfy the callback function condition not all other values that satisfy the callback function condition 
//find method will not return array but a value/first ever value that satisfy the callback

/* 
const firstWithdraw = movements.find(mov=>mov<0)
console.log(movements);
console.log(firstWithdraw);

const account = accounts.find(acc=>acc.owner==="Jessica Davis");
console.log(account);

for(const account of accounts){

  if (account.owner === "Jessica Davis"){
    console.log(account);
  }

} */

const updateUI = function(acc){
  //display movements
  displayMovements(acc.movements);
    
  //Display balance 
  displayBalance(acc);

  //Display Summary 
  createSummaryDisplay(acc);   
}
console.log(accounts);
let  curentAccount;//used to transfer actions so created globally 
btnLogin.addEventListener("click",function(e){
  e.preventDefault();//block from form submitting 
  curentAccount = accounts.find(acc=>acc.username === inputLoginUsername.value)

  if(curentAccount?.pin === Number(inputLoginPin.value)){
      labelWelcome.textContent = `Welcome, ${curentAccount.owner.split(" ")[0]}`;

      containerApp.style.opacity = 100;

      inputLoginUsername.value = inputLoginPin.value = "";

      
      inputLoginPin.blur();
      inputLoginUsername.blur();//It remove focus from currently selected input field element 
      
      //Display movements
      //displayMovements(curentAccount.movements);
    
      //Display balance 
      //displayBalance(curentAccount);
    
      //Display Summary 
      //createSummaryDisplay(curentAccount);
      updateUI(curentAccount);
  }

})

//trsnsfer money 
btnTransfer.addEventListener("click",function(e){
   e.preventDefault();
   const transferAmount = Number(inputTransferAmount.value);
   const transferTo = accounts.find(acc=>acc.username===inputTransferTo.value)
     
   inputTransferTo.value = inputTransferAmount.value ="";
   inputTransferTo.blur();
   inputTransferAmount.blur();
   
   if( transferTo && transferAmount>0 && curentAccount.balance>=transferAmount && curentAccount.username !== transferTo?.username){
     console.log("valid transfer");
      
     curentAccount.movements.push(-transferAmount);
     transferTo.movements.push(transferAmount);

     updateUI(curentAccount);
   }

   //?. optional chaining --> if there is undefine then not check next property 
   //if transferto === undefine then if condition shold not work because undefine 1=== currentaccount.username would be true sometimes 
   
})

btnLoan.addEventListener("click",function(e){
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  
  if(loanAmount>0 && curentAccount.movements.some(mov=>mov>=loanAmount*0.1)){
      curentAccount.movements.push(loanAmount);
  }

  updateUI(curentAccount);
  inputLoanAmount.value="";
  inputLoanAmount.blur();
  
})

console.log(accounts);
console.log(accounts);

btnClose.addEventListener("click",function(e){
   e.preventDefault();
   if(curentAccount.username === inputCloseUsername.value && curentAccount.pin === Number(inputClosePin.value)){
      console.log("account closed");
      
      //find index() justlike find method but give output of first index that satisfy the condition inside callback function
      const index = accounts.findIndex(acc=>acc.username === curentAccount.username);

      accounts.splice(index,1);

      containerApp.style.opacity = 0;

   }

   inputCloseUsername.value = inputClosePin.value ="";
   inputClosePin.blur();
   inputCloseUsername.blur();
})

//some and every method 
//some() -- give boolean results true if any of the array item satisfy the callback function condition otherwise give false .
//but include() -- give true or false to check exact equal value in the array 
//every() -- give true if all item satify the callback function condition otherwise give false 
console.log("***************************");
console.log(movements);
console.log(movements.includes(-400))
console.log(movements.some(mov=>mov>0));
console.log(movements.some(mov=>mov>1500));
const deposit3000 = mov=>mov>=3000;
console.log(movements.some(deposit3000));

//every
console.log(accounts);
console.log(account4.movements.every(mov=>mov>0));
const withdrawCheck = mov=>mov<0;
console.log(account4.movements.every(withdrawCheck));

console.log("****************************");

//flat()-->make nested array into normal array without nested array inside it arr= [[1,2,3],4,5,6,[7,8,9],10] 
//arr.flat(1) --> default -->[1,2,3,4,5,6,7,8,9,10]
//arr.falt(2)--> go deep inside to clear nesting
//[[[1,2],3],[[4,5],6],[[7,8],9],10] --> [1,2,3,4,5,6,7,8,9,10]

//flatMap --> it would do both flat and map method together but can not do deeper falt using this method 


console.log(accounts);

const overallBalance1 = accounts.map(mov=>mov.movements).flat(1).reduce((acc,i)=>acc+i)
console.log(overallBalance1);

const overallBalance2 = accounts.flatMap(mov=>mov.movements).reduce((acc,i)=>acc+i);
console.log(overallBalance2);

const arr = [[[1,2],3],[[4,5],6],[[7,8],9],10];

console.log(arr.flat(1));
console.log(arr.flat(2));

console.log("=======Sorting Arrays=======================================================");
//sort() -- it would give priority to capital letters then make the words first which has capital letter 
//sort() -- it would only works for string 
//this sort() will mutate the original array 
//once we used it for numbers it would not work the way we expected but it would work just like string in numbers as well not based on the values 
const AcountNames = ["jonas","anjalo","Cummis","warner","mike","tyson"];
console.log(AcountNames);
console.log(AcountNames.sort());
console.log(AcountNames);

console.log(movements);
console.log(movements.sort());
console.log(movements);
//the sort() would use callback functions to sort the numbers in ascending order and descending order 

/*movements.sort((a,b)=>{
   if(a>b) return 1 --> positive return would switch the position of a anb b here a=currentb value and b=next value, so it shows the ascending order
   if(a<b) return -1 --> negative return says remain unchanges in position
})
 
this is for descending order 
if(a<b) return 1
if(a>b) return -1

we can make it simple based on its positive and negative returns 
for ascending order 
movements.sort((a,b)=>a-b) --> if a>b it would return positive then a,b would switch then it ended up being ascending order if a<b, it would not switch since a-b would be negative return 

for descending order 
movements.sorts((a,b)=>b-a) --> if b>a, it would be positive return so b and a would switch which would be ended up being descending order.while if a>b it would be negative return, no switching happens.
*/
//ascending
movements.sort((a,b)=>{
  if(a>b) {return 1;}
  if(b>a) {return -1;}
})
console.log(movements);

movements.sort((a,b)=>a-b);
console.log(movements);

//descending
movements.sort((a,b)=>{
  if(a<b) return 1;
  if(a>b) return -1;
})
console.log(movements);
movements.sort((a,b)=>b-a);
console.log(movements)

//implement sort button 
let sorted = false;
btnSort.addEventListener("click",function(e){
  e.preventDefault();
  displayMovements(curentAccount.movements,!sorted);
  sorted = !sorted;
  console.log(sorted);
})


console.log("*********************************************creating filling Arrays********************************");
const arrNum = [1,2,3,4,5,6,7,8,9,10];

console.log(new Array(7));//passing one value would create empty spaces for arrays here 7 empty spaces created to store items later programatically .
console.log(new Array(1,2,3,4,5,6,7));

const emptySpaces = new Array(4);
console.log(emptySpaces);
emptySpaces.fill(1);//it would mutate the original array and fill the space with value pased
console.log(emptySpaces);
//this fill method would also would work just like slice method in array 
console.log(emptySpaces.fill(2,1));//from 1 to rest of the elements, 2 would be replaced 
console.log(emptySpaces);
console.log(emptySpaces.fill(23,1,3));//from index 1 to 2, 23 will be replaced 


//Array.form() -- to generate array programatically without using fill method, this is just like use map method on empty array 
const Z = Array.from({length:7},()=>1);
console.log(Z)

const y = Array.from({length:10},(_,i)=>i+1);
console.log(y);

 const Dice = Array.from({length:100},()=>Math.trunc(Math.random()*6+1));
 console.log(Dice);

//Array.from() --> this methods main usecase is to create array from array like structures map,sets and strings as well as querySelectorAll() which is not array but nodelist which is array like structure no array methods are applicable for it but once it can be converted into array using tthis Array.from().
console.log(document.querySelectorAll(".movements__value"));//node list

const arrSet = [1,2,2,3,3,3,4,4,5,5];
const arrMap =[[1,1],[2,4],[3,9],[4,16],[5,25]];

const setCreation = new Set(arrSet);
console.log(setCreation);
console.log(Array.from(setCreation));

const mapCreation = new Map(arrMap);
console.log(mapCreation);
console.log(Array.from(mapCreation));


const ArrNodeList = Array.from(document.querySelectorAll(".movements__value"));
console.log(ArrNodeList);

labelBalance.addEventListener("click",function(){
  const ArrNodeList = Array.from(document.querySelectorAll(".movements__value"),el=>Number(el.textContent.replace("€"," ")));//just like using map right after make an array like structure into array

  console.log(ArrNodeList);
  /* console.log(ArrNodeList.map(el=>Number(el.textContent.replace("€"," ")))); */

})

//we can make it as array using spread operator as well 
console.log([...document.querySelectorAll(".movements__value")].map(el=>Number(el.textContent.replace("€"," "))));

console.log("********************array method coding practice******************************************");
//1
const wholeBalance1 = accounts.map(mov=>mov.movements).flat().reduce((acc,item)=>acc+item);

const wholeBalance2 = accounts.flatMap(mov=>mov.movements).reduce((acc,item)=>acc+item);

console.log(wholeBalance1);
console.log(wholeBalance2);

//2

const DepositGreaterthan1000_1 = accounts.flatMap(mov=>mov.movements).filter(mov=>mov>=1000).length
console.log(DepositGreaterthan1000_1);

const DepositGreaterthan1000_2 = accounts.flatMap(mov=>mov.movements).reduce((count,current)=> current>=1000 ? count+1 : count,0);
console.log(DepositGreaterthan1000_2);

//prefix postfix 
let a = 10; 
console.log(a++);//post fix will increase value but not assigned to a so showing old value 
console.log(a);//here now show the increment 
console.log(++a)//prefix increase and assign the value so showuing the increased new value 

//3.in reduce method alwas accumulator track what we want to return and return the final value of aacumulator which satisfy the calllback function consdition ultimately or finally
//To return object from reduce method
const BalanceObject_1 = accounts.flatMap(mov=>mov.movements).reduce((sums,current)=>{
  current>0 ? sums.deposit+=current : sums.withdraw+=current;
  return sums;
},{deposit:0,withdraw:0});

const BalanceObject_2 = accounts.flatMap(mov=>mov.movements).reduce((sums,current)=>{
  sums[current>0 ? "deposit" : "withdraw"]+=current;
  return sums;
},{deposit:0,withdraw:0});

const {depositReduce,withdrawReduce} = accounts.flatMap(mov=>mov.movements).reduce((sums,current)=>{
  sums[current>0 ? "depositReduce" : "withdrawReduce"]+=current;
  return sums;
},{depositReduce:0,withdrawReduce:0});


console.log(BalanceObject_1);
console.log(BalanceObject_2);
console.log(depositReduce,withdrawReduce);

//4.caseTitle

const ConvertcaseTitle = function(title){

  const exception = ["a","an","and","the","but","or","on","in","with"];
 
  const capitalize = str=>str.replace(str[0],str[0].toUpperCase());
   
  const titleCase = title.toLowerCase().split(" ").map(item=> exception.includes(item) ? item : capitalize(item)).join(" ");

  return capitalize(titleCase);

}

console.log(ConvertcaseTitle("This is a title case"));

console.log(ConvertcaseTitle("And this is an opportunity"));
