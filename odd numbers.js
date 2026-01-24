//odd numbers print from 1 to 25
//odd numbers will give remainder 1 when divided by 2

function oddNumbers() {
  for (let i = 1; i <= 25; i++) {
    if(i%2 ===1){
        console.log("odd Number:" +i);
    }
    else{
        console .log("even Number:" +i);

    }
    }
}oddNumbers();