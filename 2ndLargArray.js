'use strict';

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let max=0 ,smax=0;
    for(let e of nums){
        if(e>max){
            smax=max;
            max=e;
        }else if(e>smax&&e<max) smax=e;
 
    }
    return smax;
}


function main() {
	alert("hellro");
	
    var nums = [10, 9, 9, 8, 8, 11, 8, 0, 9, 1];
    
    console.log(getSecondLargest(nums));
}

main();