const userData ={ name:'Raju', email:'raju@gmail.com', password:'1234'};

console.log(userData.name);
 console.log(userData['password']);
 

userData.address= 'Lucknow';
console.log(userData);
const smartphone ={
    brand: 'Apple',
    model: '14promax',
    price: '90000',
    color: 'black',
}
console.log(smartphone);
//change price
smartphone.price = 100000;
console.log(smartphone);
//add more color
smartphone.color = ['black','blue','pink'];
console.log(smartphone);
//replace color
console.log(smartphone.color[1]);
smartphone.color[1]='red';
console.log(smartphone);
