let myarr =['apple', 38534, 46,45, false, Math];
// console.log(myarr);

const movies = ['Pathaan' , 'KGF' , 'Zero' , 'Vedha' , 'Fan'];

console.log(movies[3]);

console.log(movies.length);

console.log(movies.at(-1));

console.log(movies.slice(1,4));

console.log(movies.slice(2, 50));
//adding elements

movies.push('Antman');

console.log(movies);
//adds element to start

movies.unshift('Iron');//add elements to end
console.log(movies);

console.log(...movies);
//movies = [...movies] Permanent
 //replace
 console.log([...movies.slice(0,4) , 'superman',...movies.slice(5)]);

 //removing element

 movies.pop() //remove last element

 console.log(movies);

 movies.shift()//remove the first element
 console.log(movies);

 movies.splice(1,2);

 console.log(movies);

 movies.splice(0,2);
 console.log(movies);
