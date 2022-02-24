
//First Set  ************************************************************************************
// let arr=[1,2,10,90,100,4,5,3];

//sum of odd numbers
// const sumOdd=(acc,curr)=>curr%2!==0?acc+curr:acc;
// console.log(arr.reduce(sumOdd,0))

//sum of no's at odd indices
// const reducer=(acc,curr,index)=>index%2!==0?acc+curr:acc;
// console.log(arr.reduce(reducer,0))

//Biggest number
// const biggestNum=(acc,curr)=>curr>acc?curr:acc;
// console.log(arr.reduce(biggestNum,0))

//No's divisible by 10
// const numberDivisbleBy10=number=>number%10===0;
// console.log(arr.filter(numberDivisbleBy10))

//Increment odd by 1 and Decrement even by 1
// const oddEvenManipulation=number=>number%2===0?number-=1:number+=1;
// console.log(arr.map(oddEvenManipulation))

//Object of sum of even and odd separately
// const sumEvenAndOdd=(acc,curr)=>curr%2===0?{...acc,even:acc.even+curr}:{...acc,odd:acc.odd+curr};
// console.log(arr.reduce(sumEvenAndOdd,{even:0,odd:0}))




//Second Set ************************************************************************************
// let input=["apple","orange","papaya","banana","grapes","sapota","strawberry","fry"];

//No. of strings with similar number of chars
// const numberOfStrings=(acc,curr)=>acc[curr.length]?{...acc,[curr.length]:++acc[curr.length]}:{...acc,[curr.length]:1};
// console.log(input.reduce(numberOfStrings,{}))

//Strings with vowel
// const containsVowel=item=>item.match(/[aeiou]/);
// console.log(input.filter(containsVowel,{}))

//no. of chars in each item
// const numberOfChars=(acc,curr)=>[...acc,{[curr]:curr.length}];
// console.log(input.reduce(numberOfChars,[]))




//Third Set


// (Currying)  ******************************************************************************
// const internalWork=parameter=>name=>`${name} has already looked into ${parameter}`;
// const getUserName=internalWork('100 directories');
// console.log(getUserName('Eesh'));

// (Compose)  ******************************************************************************
// const textGen=userName=>`${userName} has logged in 5 minutes ago`;
// const infoGen=userId=>`User with user id:${userId}`;
// console.log(textGen(infoGen(15)))

//THEONEQUESTION
// const increment=number=>number+1;
// const decrement=number=>number-1;
// const square=number=>number*number;
// const add2=number=>number+2;

// const internalWork=(...args)=>num=>args.reduce((acc,curr)=>curr(acc),num);
// const giveNumToRunMagic=internalWork(increment,square,add2,decrement);
// console.log(giveNumToRunMagic(4));

//MOREPRACTICE

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// console.log(arr.map(num=>num%2===0?num+1:num));


// const family = [
//     {
//       name    : 'Tanay',
//       haveCycle : true
//     },
//     {
//       name     : 'Akanksha',
//       haveCycle : false
//     },
//     {
//       name     : 'Tanvi',
//       haveCycle : true
//     },
//       {
//       name     : 'Kanak',
//       haveCycle : false
//     }
//   ];
//   const memberName=(acc,curr)=>curr.haveCycle?[...acc,curr.name]:acc;
//   console.log(family.reduce(memberName,[]))


// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
// const evenLessAndEqual8=num=>num%2===0 && num<=8;
// console.log(arr.filter(evenLessAndEqual8));


// const arr = ['eat', 'sleep', 'repeat', 'code'];
// const lengthMore5=name=>name.length>5;
// console.log(arr.filter(lengthMore5));


// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];
// const sumOfMoreThan50=(acc,curr)=>curr>50?acc+curr:acc;
// console.log(arr.reduce(sumOfMoreThan50,0));


// const arr = [1, 2, 3, 7, 5, 6, 8, 9];
// const prodOfEven=(acc,curr)=>curr%2===0?acc*curr:acc;
// console.log(arr.reduce(prodOfEven,1));


// const arr = [
// 	{
// 		name: "Jay",
// 		age: 60
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36
// 	},
// 	{
// 		name: "Manny",
// 		age: 16
// 	},
// 	{
// 		name: "Joe",
// 		age: 9
// 	}
// ]
// const sumOfAges=(acc,curr)=>acc+curr.age;
// console.log(arr.reduce(sumOfAges,0));


// const arr = ["You", "all", "are", "rockstars"];
// const objWithIndex=(acc,curr,index)=>({...acc,[index]:curr});
// console.log(arr.reduce(objWithIndex,{}));
// Returning an object should be done in ()


// const arr = [
// 	{
// 		name: "Apple"
// 	},
// 	{
// 		name: "Mango"
// 	},
// 	{
// 		name: "Potato"
// 	},
// 	{
// 		name: "Guava"
// 	},
// 	{
// 		name: "Capsicum"
// 	}
// ]
// console.log(arr.map(item=>item.name.length>5?{...item,type:'vegetable'}:{...item,type:'fruit'}));


// const inventory = [
//     {name: 'fans', quantity: 3},
//     {name: 'chimneys', quantity: 0},
//     {name: 'bulbs', quantity: 5},
//     {name: 'stove', quantity: 1}    
//   ];
//   console.log(inventory.filter(item=>item.quantity<2));
//   console.log(inventory.reduce((acc,item)=>acc+item.quantity,0));
//   console.log(inventory.find(item=>item.quantity===0))


// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]
// console.log(arr.join('-'))


// let num=24345687;
// console.log(num.toString().split('').reduce((acc,curr,index,arr)=>Number(curr)%2===0 && arr[index+1]%2===0?acc+=curr+'-':acc+=curr,''))


// let lowerCase='neogrammer';
// console.log(lowerCase.toUpperCase());


// let word="neoGrAmmEr";
// let onlyVowelUpperCase=word.split('').map(char=>char.match(/[aeiouAEIOU]/)?char.toUpperCase():char.toLowerCase()).join('');
// console.log(onlyVowelUpperCase)


// const input = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'e'],
//     ['e', 'd', 'f'],
//   ];
// const flat=(acc,curr)=>[...acc,...curr];
// console.log(input.reduce(flat,[]));


// const input = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'e'],
//     ['e', 'd', 'f'],
//   ];
// const flat=(acc,curr)=>[...acc,...curr];
// const occurences=(acc,curr)=>acc[curr]?{...acc,[curr]:++acc[curr]}:{...acc,[curr]:1};
// console.log(input.reduce(flat,[]).reduce(occurences,{}));
