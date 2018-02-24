// PLEASE DON'T change function name
module.exports = function makeExchange(num) {
var arr = [50,25,10,5,1];
		var symb = ["H","Q","D","N","P"];
		var result = {};
		if(num == 0 || num < 0 ){
			return {}
		} else if(num >= 10000){
			
			return {error: "You are rich, my friend! We don't have so much coins for exchange"};
		} 
		//else{

		for (var i = 0; i < arr.length; i++){
			if(num % arr[i] == num) {
				// break outer;
				console.log("Gotcha")
				//continue
			} 
			if(num % arr[i] == 0){ // H
				console.log("num%arr[i] = 0");
				var res = num / arr[i];
				result.H = res;
				break;
				// obj[symb[i]] = res;
				// return obj;
			} else { 
				var ost = num % arr[i];
				console.log(num+ "  " + arr[i]);

				var bigCoin = Math.floor(num / arr[i]);
				if(bigCoin){
					result.H = bigCoin;
				}
				console.log(ost + '   ' + bigCoin );
				
				for(var k = i+1; k < arr.length; k++){
					if(ost % arr[k] == 0){ // Q
					
					var bigCoin2 = ost / arr[k];
						result.Q = bigCoin2;
						console.log(arr[k]);
						console.log("bigCoin2:  ",bigCoin2);

						break;
					}else {
						var bigCoin2 = Math.floor(ost / arr[k]);
						if(bigCoin2){
							result.Q = bigCoin2;
						}
						console.log(arr[k]);
						console.log("bigCoin2",bigCoin2);
						var ost2 = ost % arr[k];
						
						for (var j = k+1; j < arr.length; j++){
							if(ost2 % arr[j] == 0){
								var bigCoin3 = ost2 / arr[j];
								result.D = bigCoin3;
								console.log("bigCoin3:  ", bigCoin3);
								break;
							} else {
								var bigCoin3 = Math.floor(ost2 / arr[j]);
								if(bigCoin3){result.D = bigCoin3};
								console.log("bigCoin3",bigCoin3);
								var ost3 = ost2 % arr[j];
								console.log("ost3: ",ost3);
								
								for(var h = j+1; h < arr.length; h++){
									if(ost3 % arr[h] == 0){
										console.log("ost3: ",ost3);
										console.log(arr[h]);
										var bigCoin4 = ost3 / arr[h];
										result.N = bigCoin4;
										console.log("bigCoin4:  ", bigCoin4);
										break;
									} else {
										var bigCoin4 = Math.floor(ost3 / arr[h]);
										var ost4 = ost3%arr[h];
										if(bigCoin4){result.N = bigCoin4};
										result.P = ost4;
										console.log('bigCoin4', bigCoin4); // N
										console.log(ost4); // P


										break;
									}
								}
								break;
							}
						}
						
//						console.log("ost2: ",ost2);
//						console.log("bigCoin2: ",bigCoin2);
						break;
					}
					
				}
				break;
				
			}
		}
		return result;
}
