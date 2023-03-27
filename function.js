function addNums(a, b, c){
   var d = a+b+c;

    console.log(d);
}
addNums(45, 2343, 45544);


const fact = function(n){
      let f = 1;
      for(let i=2; i<=n; i++){
        f = f*i;
      }

      console.log(f);
}

fact(9);

const greet = (name, time) => {
    if(time > 4 && time <12){
        console.log('Good Morning' + name);

    }else if(time > 12 && time <16){
        console.log('Good Afternoon' + name);
    }else if(time > 16 && time <20){
        console.log('Good Evening' + name);
    }else {
        console.log('Good Evening' + name);
    }

}

greet('Raju', 17);
greet('Pinki', 10);


