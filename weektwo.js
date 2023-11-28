function printOddNumberPattern(num){

if (num<0) {
console.log("enter a number");
return;
}
    for(let i=1;i<=num;i+=2)
    {
        console.log(i);
    }
}

printOddNumberPattern(20);