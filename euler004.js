//Find the largest palindrome made from the product of two 3-digit numbers.
(function euler004(){

calcLargestPalindrome();
	function calcLargestPalindrome(){
		var largestPalindrome = 0;
		for(let i = 999; i > 99; i--){
			for(let j = 999; j > 99; j--){
				let result = i * j;
				if(isPalindrome(result.toString()) && result > largestPalindrome){
					largestPalindrome = result;
					console.log(largestPalindrome);
				}
			}
		}
		return largestPalindrome;
	}

	function isPalindrome(str){
		return str === str.split('').reverse().join('');
	}

}());