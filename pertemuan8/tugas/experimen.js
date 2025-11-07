for (let index = 0; index <= 100; index++) {
    if (index % 3 == 0 && index % 5 == 0){
        console.log(`${index} ini adalah fizzbuss`)
    }
    else if(index % 3 == 0){
        console.log(`${index} ini adalah fizz`);
    }
    else if(index  % 5 == 0){
        console.log(`${index} ini adalah buzz`)
    }
    else{
        console.log(`${index} ini gk ada`);
        
    }
    
}
for (let a = 0;  a <= 50; a++){
    if(a % 2 == 0){
        console.log(`${a} ini adalah angka genap;`);
    }
    else{
        console.log(`${a} ini adalah angka ganjil`);
        
    }
}