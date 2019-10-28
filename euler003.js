(function euler003(){
calcLargestPrimeFactor(600851475143);
function calcLargestPrimeFactor(n){
	var i = 2;
	while(i<=n){
		if(n%i == 0){
			n/=i;
		} else {
			i++;
		}
	}
	console.log(i);
}
}());
