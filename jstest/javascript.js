function randomBetween(min, max){
    let result = Math.floor(Math.random() * (max-min+1) + min);
    console.log(result);
}

randomBetween(5,8)