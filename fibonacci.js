const sequence = [];
let lastNumber;
let  numberBeforeLastNumber;
let  fibonacci;
let sum = 0;
for(let i = 1; i<=32;i++){
    if(i===1){
        sequence.push(i);
    }else if(i===2){
        sequence.push(i)
    }else{
        numbersInSequence = sequence.length;
        lastNumber = numbersInSequence - 1;
        numberBeforeLastNumber = numbersInSequence - 2;
        fibonacci = sequence[lastNumber] + sequence[numberBeforeLastNumber];
        sequence.push(fibonacci);

    }
}

    for(let i = 1; i<=sequence.length;i++){
    if(sequence[i]%2===0){
        sum = sum + sequence[i];
        

    }

}
console.log(sum);
