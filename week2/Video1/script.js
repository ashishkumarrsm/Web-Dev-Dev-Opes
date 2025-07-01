console.log("Hello World");


// async js is a way to write code that runs in the background and does not block the main thread.



// write a function for sum of two numbers


let totalSum =(Val1,Val2)=>{

    let sum= Val1+Val2;
    console.log(sum);
    return sum

}


totalSum(10,20);



// find the sum of 1 to n numbers



let sumOfNumbers = (n)=>{
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    console.log(sum);
    return sum;

}


sumOfNumbers(10);


// find the sum of 1 to n numbers using recursion


let sumOfNumbersRecursion = (n)=>{
    if(n===0){
        return 0;
    }
    return n+sumOfNumbersRecursion(n-1);
}


console.log(sumOfNumbersRecursion(10));







function SumOfNNumber(n){
let sum =0;
for(let i=1;i<=n;i++){
    sum=sum+i;
}
console.log(sum);
return sum;
}


SumOfNNumber(5);






// Synchronous code
// Synchronous code is executed line by line, in the order it's written. Each operation waits for the previous one to complete before moving on to the next one.



function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
